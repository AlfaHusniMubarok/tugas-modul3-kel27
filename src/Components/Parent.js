import { Component } from "react"; import React from "react";
import SecondChild from "./SecondChild";
import FirstChild from "./FirstChild";
import ThirdChild from "./ThirdChild";


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
                <h1>Halaman Pemesanan Restoran Kelompok 27</h1>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "30%" }}>
                        <button onClick={this.ubahKomponenMuncul1}>{this.state.firstChild ? 'Tutup' : 'Masukan'} Data Pelanggan </button>
                        {this.state.firstChild && <FirstChild />}
                    </div>
                    <div style={{ width: "40%" }}>
                        <button onClick={this.ubahKomponenMuncul2}>{this.state.secondChild ? 'Tutup' : 'Pilih'} Menu </button>
                        {this.state.secondChild && <SecondChild />}
                    </div>
                    <div style={{ width: "30%" }}>
                        <button onClick={this.ubahKomponenMuncul3}>{this.state.thirdChild ? 'Tutup' : 'Jumlah'} Pembayaran </button>
                        {this.state.thirdChild && <ThirdChild />}
                    </div>
                </div>
            </>
        );
    }
}

export default Parent;