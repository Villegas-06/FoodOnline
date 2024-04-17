import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  food: any = {
    name: '',
    description: '',
    price: null,
    quantity: null
  };

  constructor(private foodService: FoodService){}

  onSubmit() {
    this.foodService.addProduct(this.food); // Agregar el nuevo producto al servicio
    console.log('Nuevo Alimento:', this.food);
    // Reiniciar el objeto food para un nuevo producto
    this.food = {
      name: '',
      description: '',
      price: null,
      quantity: null
    };

    const allProducts = this.foodService.getProducts();
    console.log(allProducts);


  }
}
