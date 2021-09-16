import React, { Component } from "react";
class ThirdChild extends React.Component {
    constructor(props) {
      super(props)
      this.handleChangePembayaran = this.handleChangePembayaran.bind(this)
      this.state = {
        pembayaran: {
            uang: 0,
            totalHarga:0
          },
          kembalian: 0
        }
      }
      handleKembalian = () => {
        const {
            uang,
            totalHarga
        }
     = this.state.pembayaran
        this.setState({
          kembalian: uang - totalHarga
        })
      }

      handleChangePembayaran(e) {
        e.preventDefault()
        const { pembayaran } = this.state
        const { name, value} = e.target
        this.setState({
          pembayaran: {
            ...pembayaran,
            [name]: value
          }
        }, this.handleKembalian);
      }
    
      render() {
        const {
          pembayaran,
          kembalian
        } = this.state
        return (
            <>
                <div>
                    <p>Masukkan Total Harga</p>
                </div>
                <input onChange={this.handleChangePembayaran} name='totalHarga'
                    value={this.state.totalHarga} />
                <br />
                <br />

                <div>
                    <p>Masukkan Uang yang dibayarkan</p>
                </div>
                <input onChange={this.handleChangePembayaran} name='uang'
                    value={this.state.uang} />
                <br />
                <br/>
                <br />
                <span style={{textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>Kembalian: Rp {kembalian} </span>

            </>
        );
    }
}
export default ThirdChild;