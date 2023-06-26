import React, { Component } from 'react'
import './style.css'
import data from '../data/dataGlasses.json'
export default class GlassApp extends Component {
    state = {
        currentGlass: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    handleChoosenGlass = (glass) => {
        this.setState({
            currentGlass: glass
        })
    }
    renderGlassesList = () => {
        return data.map((glass, index) => {
            return (
                <div style={{ margin: '0 10px', padding: '4px', backgroundColor: 'white' }} onClick={() => this.handleChoosenGlass(glass)}>
                    <img key={index} src={glass.url} alt={glass.url} style={{ width: '100px', cursor: 'pointer' }} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className='glassApp container-fluid px-0'>
                <div className="header">
                    <h3 className='text-center text-white py-4' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>TRY GLASSES APP ONLINE</h3>
                </div>
                <div className="row mt-5">
                    <div className="col-6 text-center">
                        <img src="./img/model.jpg" alt="model" style={{ width: '250px', position: 'relative' }} />
                        <img src={this.state.currentGlass.url} style={{
                            position: 'absolute',
                            width: '118px',
                            right: '335px',
                            top: '80px'
                        }} alt="" />
                        <div className="desc">
                            <h5 style={{ color: 'blue' }}>{this.state.currentGlass.name}</h5>
                            <p style={{ fontSize: '14px' }}>{this.state.currentGlass.desc}</p>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <img src="./img/model.jpg" alt="model" style={{ width: '250px' }} />
                    </div>
                </div>
                <div class="glassList container mt-5 py-5">
                    {this.renderGlassesList()}
                </div>
            </div>
        )
    }
}
