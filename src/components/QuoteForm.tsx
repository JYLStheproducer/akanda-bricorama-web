
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Search, FileText, Send, Phone } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  budget: string;
}

const QuoteForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { cartItems, getTotalPrice } = useCart();
  
  const form = useForm<QuoteFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: '',
      description: '',
      budget: ''
    }
  });

  const onSubmit = (data: QuoteFormData) => {
    console.log('Devis soumis:', data);
    console.log('Produits sélectionnés:', cartItems);
    setIsSubmitted(true);
    
    // Simuler l'envoi du devis
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      form.reset();
    }, 2000);
  };

  const projectTypes = [
    'Rénovation intérieure',
    'Construction neuve',
    'Aménagement jardin',
    'Réparations diverses',
    'Décoration',
    'Autre'
  ];

  const budgetRanges = [
    'Moins de 100 000 FCFA',
    '100 000 - 500 000 FCFA',
    '500 000 - 1 000 000 FCFA',
    '1 000 000 - 5 000 000 FCFA',
    'Plus de 5 000 000 FCFA'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-secondary hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
          <Search className="w-4 h-4 mr-2" />
          Devis gratuit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center">
            <FileText className="w-6 h-6 mr-2 text-primary" />
            Devis Gratuit - Bricorama Akanda
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-2">Devis envoyé avec succès !</h3>
            <p className="text-neutral-dark">Nous vous contacterons dans les 24h</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Informations personnelles */}
              <div className="bg-neutral-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Vos informations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre prénom" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} required />
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
                </div>
              </div>

              {/* Projet */}
              <div className="bg-neutral-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Votre projet</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type de projet *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez le type de projet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget estimé</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez votre budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description du projet *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre projet en détail..."
                            className="min-h-24"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Produits sélectionnés */}
              {cartItems.length > 0 && (
                <div className="bg-secondary/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Produits sélectionnés</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <span>{item.name} x{item.quantity}</span>
                        <span className="font-medium">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between items-center font-bold text-primary">
                      <span>Total estimé:</span>
                      <span>{getTotalPrice().toLocaleString()} FCFA</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-gradient-primary hover:shadow-lg">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le devis
                </Button>
                <Button type="button" variant="outline" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +241 11 74 77 65
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
