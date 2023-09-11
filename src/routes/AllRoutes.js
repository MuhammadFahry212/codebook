import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsList } from "../pages/Products/ProductsList";
import { ProductDetail } from "../pages/ProductDetail";
import { CartPage, DashboardPage, Login, OrderPage, PageNotFound, Register } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />    
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} /> 

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}
