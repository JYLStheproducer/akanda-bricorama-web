
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Plus, Minus, Trash2, Download, FileText } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import InvoiceGenerator from './InvoiceGenerator';

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const [showInvoiceGenerator, setShowInvoiceGenerator] = useState(false);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <>
      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="relative">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Panier
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center">
              <ShoppingCart className="w-6 h-6 mr-2 text-primary" />
              Votre Sélection ({getTotalItems()} articles)
            </DialogTitle>
          </DialogHeader>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-neutral mb-4" />
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">Votre panier est vide</h3>
              <p className="text-neutral">Ajoutez des produits pour créer votre devis</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 py-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-neutral-light rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{item.name}</h4>
                      <p className="text-sm text-neutral">{item.category}</p>
                      <p className="text-sm text-neutral-dark">{item.price.toLocaleString()} FCFA / {item.unit}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                        min="0"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">
                        {(item.price * item.quantity).toLocaleString()} FCFA
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">{getTotalPrice().toLocaleString()} FCFA</span>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowInvoiceGenerator(true)}
                    className="flex-1 bg-gradient-primary hover:shadow-lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Générer Facture
                  </Button>
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {showInvoiceGenerator && (
        <InvoiceGenerator
          cartItems={cartItems}
          onClose={() => setShowInvoiceGenerator(false)}
        />
      )}
    </>
  );
};

export default Cart;
