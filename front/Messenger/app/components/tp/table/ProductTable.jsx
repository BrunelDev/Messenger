export function ProductTable({ product, checked, search }) {
  return (
    <tbody>
      <tr>
        <td><h5 className="pr-10 my-2"> <strong>Fruits</strong></h5></td>
      </tr>
      {product.map((prod) => {
        if (prod.categorie === "Fruit") {
          let style = prod.disponibilite === "Rupture" ? { color: "red" } : undefined;
          if (checked && prod.disponibilite === "Rupture" || (search !==null && !prod.nom.includes(search))) {
            {console.log(search)}
            return null; // Ne pas rendre la ligne si checked est faux et la disponibilité est en rupture
          }
           
          return (
            <tr key={prod.nom}>
              <td style={style} className="m-3">{prod.nom}</td>
              <td key={prod.prix} style={style}>{prod.prix}</td>
            </tr>
          );
        }
        return null;
      })}
      <tr>
        <td><h5 className="my-2"><strong>Légumes</strong></h5></td>
      </tr>
      {product.map((prod) => {
        if (prod.categorie === "Légume") {
          let style = prod.disponibilite === "Rupture" ? { color: "red" } : undefined;
          if (checked && prod.disponibilite === "Rupture" || (search !==null && !prod.nom.includes(search))) {
            return null;
          }
          return (
            <tr key={prod.nom}>
              <td style={style} className="m-3">{prod.nom}</td>
              <td key={prod.prix} style={style}>{prod.prix}</td>
            </tr>
          );
        }
        return null; // Ignorer les produits qui ne sont pas des légumes
      })}
    </tbody>
  );
}
