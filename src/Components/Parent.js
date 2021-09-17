import { Component } from "react"; import React from "react";
import SecondChild from "./SecondChild";
import FirstChild from "./FirstChild";
import ThirdChild from "./ThirdChild";
import './Parent.css';
import './SecondChild.css';
import './ThirdChild.css';
import img from './bg.jpg';

class Parent extends Component {
    state = {
        firstChild: false,
        secondChild: false,
        thirdChild: false
    }


    ubahKomponenMuncul1 = () => {
        this.setState(() => {
            return {
                firstChild: !this.state.firstChild
            }
        })
    }

    ubahKomponenMuncul2 = () => {
        this.setState(() => {
            return {
                secondChild: !this.state.secondChild
            }
        })
    }

    ubahKomponenMuncul3 = () => {
        this.setState(() => {
            return {
                thirdChild: !this.state.thirdChild
            }
        })
    }

    render() {
        return (
            <>
                <div style={{backgroundImage: `url(${img})`, backgroundRepeat:'repeat'}}>
                <h1 className= 'topnav'>Halaman Pemesanan Restoran Kelompok 27</h1>
                <div style={{ display: "flex"}}>
                    <div style={{ width: "30%" }}>
                        <button className ='button1' onClick={this.ubahKomponenMuncul1}>{this.state.firstChild ? 'Tutup' : 'Masukan'} Data Pelanggan </button>
                        {this.state.firstChild && <FirstChild />}
                    </div>
                    <div style={{ width: "40%" }}>
                        <button className ='button2' onClick={this.ubahKomponenMuncul2}>{this.state.secondChild ? 'Tutup' : 'Pilih'} Menu </button>
                        {this.state.secondChild && <SecondChild />}
                    </div>
                    <div style={{ width: "30%" }}>
                        <button className ='button3' onClick={this.ubahKomponenMuncul3}>{this.state.thirdChild ? 'Tutup' : 'Jumlah'} Pembayaran </button>
                        {this.state.thirdChild && <ThirdChild />}
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default Parent;