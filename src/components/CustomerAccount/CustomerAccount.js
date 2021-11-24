import { Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useProducts } from '../../contexts/ItemsContext'

const CustomerAccount = () => {
  const { favs, getItem } = useProducts();

  useEffect(() => {
    getItem()
  }, [])

  return (
    <>
      <h1>MY ACCOUNT</h1>
    <Grid container>
    <Grid item md={5} sm={8}>
      <h1>Contact Informatioon</h1>
    </Grid>
    <Grid item md={5} sm={8} style={{margin: '10px', padding: '5px'}}>
    {favs && favs.products ? (
      <Paper>
            <table>
              <tbody>
                {favs.products.map((item) => (
                  <tr>
                    <td>
                      <img src={item.product.image} style={{ width: '50px' }} />
                    </td>
                    <td>
                      <p className="order-summary">{item.product.title}</p>
                    </td>
                    <td>
                      <i>{item.product.category}</i>
                    </td>
                    <td>
                      <i>{item.product.price}</i>
                    </td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </Paper>
    ) : null }
    </Grid>
    </Grid>
    </>
  )
}

export default CustomerAccount
