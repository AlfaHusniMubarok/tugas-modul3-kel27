import React, { Component } from "react";

class FirstChild extends Component {
    state = {
        nomeja: '',
        namapelanggan: ''
    }
    componentDidMount() {
    alert(`Silahkan masukkan data pelanggan :)`)
    }
    componentWillUnmount() {
    alert('Thanks you...!')
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }
    render() {
        return (
            <>
                <div>
                    <p>Silahkan Masukkan Nama Pelanggan</p>
                </div>
                <input placeholder='Nama Pelanggan' style= {{textAlign:'center',fontSize:'15px',border : '1px solid black', borderRadius: '5px' ,height : '40px',width : '60%', marginLeft:'auto', marginRight:'auto'}}onChange={this.handleChange} name='namapelanggan'
                    value={this.state.namapelanggan} />
                <br />
                <br/>
                <span style={{fontFamily:'sans-serif', fontWeight:'bold', fontSize:'20px'}}>{this.state.namapelanggan}</span>
                <div>
                    <p>Silahkan Pilih No. Meja</p>
                </div>
                <input placeholder='Nomor Meja' style= {{textAlign:'center',fontSize:'15px',border : '1px solid black', borderRadius: '5px' ,height : '40px',width : '60%', marginLeft:'auto', marginRight:'auto'}}onChange={this.handleChange} name='nomeja'
                    value={this.state.nomeja} />
                <br />
                <br/>
                <span style={{fontFamily:'sans-serif', fontWeight:'bold', fontSize:'20px'}}>{this.state.nomeja}</span>

            </>
        );
    }
}
export default FirstChild;