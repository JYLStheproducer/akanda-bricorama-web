
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Download, FileText, User, MapPin } from 'lucide-react';
import { CartItem } from '@/hooks/useCart';

interface InvoiceGeneratorProps {
  cartItems: CartItem[];
  onClose: () => void;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

const InvoiceGenerator = ({ cartItems, onClose }: InvoiceGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const form = useForm<CustomerInfo>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: 'Libreville'
    }
  });

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTVA = () => {
    return Math.round(getTotalPrice() * 0.18); // TVA 18% au Gabon
  };

  const getTotalWithTVA = () => {
    return getTotalPrice() + getTVA();
  };

  const generatePDF = (data: CustomerInfo) => {
    setIsGenerating(true);
    
    // Simulation de génération PDF
    setTimeout(() => {
      const invoiceData = {
        customer: data,
        items: cartItems,
        subtotal: getTotalPrice(),
        tva: getTVA(),
        total: getTotalWithTVA(),
        invoiceNumber: `BRA-${Date.now()}`,
        date: new Date().toLocaleDateString('fr-FR')
      };
      
      // Créer le contenu HTML de la facture
      const htmlContent = generateInvoiceHTML(invoiceData);
      
      // Créer un blob et télécharger
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Facture_Bricorama_${invoiceData.invoiceNumber}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setIsGenerating(false);
      onClose();
    }, 2000);
  };

  const generateInvoiceHTML = (invoice: any) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Facture Bricorama Akanda</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
            .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #1E3A8A; padding-bottom: 20px; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: bold; color: #1E3A8A; }
            .company-info { text-align: right; }
            .invoice-details { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .customer-info, .invoice-info { width: 45%; }
            .section-title { font-weight: bold; color: #1E3A8A; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #1E3A8A; color: white; }
            .text-right { text-align: right; }
            .total-section { margin-top: 20px; text-align: right; }
            .total-line { margin: 5px 0; }
            .final-total { font-size: 18px; font-weight: bold; color: #1E3A8A; border-top: 2px solid #1E3A8A; padding-top: 10px; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <div>
                <div class="logo">🔧 Bricorama Akanda</div>
                <p>Votre partenaire bricolage & jardinage</p>
            </div>
            <div class="company-info">
                <strong>Bricorama Akanda</strong><br>
                Akanda, Gabon<br>
                Tél: +241 11 74 77 65<br>
                Email: info@bricorama-akanda.ga
            </div>
        </div>

        <div class="invoice-details">
            <div class="customer-info">
                <div class="section-title">👤 INFORMATIONS CLIENT</div>
                <p><strong>${invoice.customer.name}</strong></p>
                <p>${invoice.customer.email}</p>
                <p>${invoice.customer.phone}</p>
                <p>${invoice.customer.address}</p>
                <p>${invoice.customer.city}</p>
            </div>
            <div class="invoice-info">
                <div class="section-title">📄 FACTURE</div>
                <p><strong>N° ${invoice.invoiceNumber}</strong></p>
                <p>Date: ${invoice.date}</p>
                <p>Devise: Franc CFA (FCFA)</p>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Produit</th>
                    <th>Catégorie</th>
                    <th class="text-right">Prix unit.</th>
                    <th class="text-right">Qté</th>
                    <th class="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                ${invoice.items.map((item: CartItem) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.category}</td>
                        <td class="text-right">${item.price.toLocaleString()} FCFA</td>
                        <td class="text-right">${item.quantity}</td>
                        <td class="text-right">${(item.price * item.quantity).toLocaleString()} FCFA</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

        <div class="total-section">
            <div class="total-line">Sous-total: <strong>${invoice.subtotal.toLocaleString()} FCFA</strong></div>
            <div class="total-line">TVA (18%): <strong>${invoice.tva.toLocaleString()} FCFA</strong></div>
            <div class="total-line final-total">TOTAL TTC: <strong>${invoice.total.toLocaleString()} FCFA</strong></div>
        </div>

        <div class="footer">
            <p><strong>Bricorama Akanda</strong> - Plus de 10 000 références pour tous vos projets</p>
            <p>📍 Akanda, Gabon | 📞 +241 11 74 77 65 | 🌐 www.bricorama-akanda.ga</p>
            <p><em>Merci de votre confiance !</em></p>
        </div>
    </body>
    </html>
    `;
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center">
            <FileText className="w-6 h-6 mr-2 text-primary" />
            Générer votre Facture
          </DialogTitle>
        </DialogHeader>

        {isGenerating ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Génération en cours...</h3>
            <p className="text-neutral-dark">Votre facture sera téléchargée automatiquement</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(generatePDF)} className="space-y-6">
              <div className="bg-neutral-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Informations de facturation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet *</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom et prénom" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="votre@email.com" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone *</FormLabel>
                        <FormControl>
                          <Input placeholder="+241 XX XX XX XX" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ville *</FormLabel>
                        <FormControl>
                          <Input placeholder="Libreville" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre adresse complète" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="bg-secondary/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Récapitulatif de la commande</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-medium">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Sous-total:</span>
                    <span className="font-medium">{getTotalPrice().toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA (18%):</span>
                    <span className="font-medium">{getTVA().toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg text-primary border-t pt-2">
                    <span>Total TTC:</span>
                    <span>{getTotalWithTVA().toLocaleString()} FCFA</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-gradient-primary hover:shadow-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger la Facture
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Annuler
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceGenerator;
