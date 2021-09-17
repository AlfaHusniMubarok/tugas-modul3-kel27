import React, { Fragment } from 'react';
import './SecondChild.css';

class SecondChild extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeAsupan = this.handleChangeAsupan.bind(this)
    this.state = {
      asupan: [
        ['Ayam Goreng', 10000],
        ['Bakso', 5000],
        ['Mie Ayam', 15000],
        ['Ayam Bakar', 13000],
        ['Soto Ayam', 12000],
        ['Rendang', 20000],
        ['Sate Ayam', 8000],
        ['Sate Kambing', 12000],
        ['Penyetan', 20000],
        ['Nasi Goreng', 15000],
        ['Kwetiau', 4000],
        ['Ayam Geprek', 17000]

      ],
      menu: {
        makanan1: 0,
        makanan2: 0,
        makanan3: 0,
        makanan4: 0,
        makanan5: 0,
        makanan6: 0,
        makanan7: 0,
        makanan8: 0,
        makanan9: 0,
      },
      totalHarga: 0
    }
  }

  handleTotal = () => {
    const {
      makanan1,
        makanan2,
        makanan3,
        makanan4,
        makanan5,
        makanan6,
        makanan7,
        makanan8,
        makanan9
    }
 = this.state.menu
    this.setState({
      totalHarga: makanan1 + makanan2 + makanan3 + makanan4 + makanan5 + makanan6 + makanan7 + makanan8 + makanan9
    })
  }


  handleChangeAsupan(e) {
    e.preventDefault()
    const { menu } = this.state
    const { name } = e.target
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState({
      menu: {
        ...menu,
        [name]: Number(value)
      }
    }, this.handleTotal);
  }

  render() {
    const {
      asupan,
      totalHarga
    } = this.state

    return (
      <>
      <p>Pilih Menu</p>
        <div className='tips-container'>
          <div style={{ height: '75%' }} className='tips-content'>
            <div className='pilih-menu'>
              <div className='makan1'>
                <select onChange={this.handleChangeAsupan} name='makanan1'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select><br></br>
                <select onChange={this.handleChangeAsupan} name='makanan2'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select><br></br>
                <select onChange={this.handleChangeAsupan} name='makanan3'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
              </div>
              <div className='makan2'>
                <select onChange={this.handleChangeAsupan} name='makanan4'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select><br></br>
                <select onChange={this.handleChangeAsupan} name='makanan5'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select><br></br>
                <select onChange={this.handleChangeAsupan} name='makanan6'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
              </div>
              <div className='makan3'>
                <select onChange={this.handleChangeAsupan} name='makanan7'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select><br></br>
                <select onChange={this.handleChangeAsupan} name='makanan8'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select><br></br>
                <select onChange={this.handleChangeAsupan} name='makanan9'>
                  <option value='0'>Pilih Makanan</option>
                  <Fragment>
                    {
                      asupan.map(menumakanan => {
                        return (
                          <option value={menumakanan[1]}>{menumakanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
                <h2 style={{ color: '#000', textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>Total Harga: <br></br>Rp {totalHarga} </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SecondChild;