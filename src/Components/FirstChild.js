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
                <input onChange={this.handleChange} name='namapelanggan'
                    value={this.state.namapelanggan} />
                <br />
                <br/>
                <span>{this.state.namapelanggan}</span>
                <br />
                <br />
                <br />
                <div>
                    <p>Silahkan Pilih No. Meja</p>
                </div>
                <input onChange={this.handleChange} name='nomeja'
                    value={this.state.nomeja} />
                <br />
                <br/>
                <span>{this.state.nomeja}</span>

            </>
        );
    }
}
export default FirstChild;