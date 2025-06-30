import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { FormUpdate } from "../../components/FormUpdate"
const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(null)
  const [productEditing, setProductEditing] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const { user, logout, token } = useAuth()

  const fetchingProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`)

      if (!response.ok) {
        setError("Sesión terminada, vuelve a loguearte.")
        logout()
        // continuar controlando el home como ruta privada
        throw new Error("Falló el fetch :(")
      }
      const dataProducts = await response.json()

      setProducts(dataProducts.data)
    } catch (error) {
      setError(error.message)
    }
  }
  const handleSearch = async (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim() === "") {
      fetchingProducts()
      return
    }

    try {
      const response = await fetch(`http://localhost:1234/api/products/search?name=${value}`)
      if (!response.ok) throw new Error("Error al buscar productos")
      const data = await response.json()
      setProducts(data.data)
    } catch (error) {
      setError("No se pudo realizar la búsqueda")
    }
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (product) => {
    if (confirm("Esta seguro que quieres borrar el producto?")) {
      try {
        const response = await fetch(`${API_URL}/products/${product._id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
        })
        if (response.ok) {
          fetchingProducts()
        }
      } catch (error) {
        setError(error.message)
      }
    }
  }

  const handleUpdate = async (product) => {
    setIsEditing(true)
    setProductEditing(product)
  }


  const handleCancelEditing = () => {
    setIsEditing(null)
    setProductEditing(null)
  }

  return (
    <Layout>
      <input
        type="text"
        placeholder="Buscar Producto"
        value={searchTerm}
        onChange={handleSearch}
      />

      <h1>Lista de productos</h1>
      {user && <p>Bienvenido, {user.email}</p>}
      {error && <>
        <div className="error-home">
          <h2>{error}</h2>
          <Link to={"/login"}>Ir al login</Link>
        </div>
      </>}
      {
        isEditing && <FormUpdate product={productEditing} handleCancelEditing={handleCancelEditing} fetchingProducts={fetchingProducts} />
      }
      <section className="grid-products">
        {
          products.map((product) => {
            return (
              <div key={product._id}>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p className="category-product">{product.category}</p>
                {
                  user && <div className="control-product">
                    <button className="btn-update" onClick={() => { handleUpdate(product) }}>Actualizar</button>
                    <button className="btn-delete" onClick={() => { handleDelete(product) }}>Borrar</button>
                  </div>
                }
              </div>
            )
          })
        }
      </section>
    </Layout>
  )
}

export { Home }