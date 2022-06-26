import React from 'react';
import sofa from '../../../../images/Icons/sofa.png'
import centerTable from '../../../../images/Icons/centerTable.png'
import diban from '../../../../images/Icons/Divan.png'
import tVCabinet from '../../../../images/Icons/TvCabinet.png'
import openShelves from '../../../../images/Icons/Open Shelves.png'
import Dining from '../../../../images/Icons/Dining.png'
import DiningChair from '../../../../images/Icons/Dining Chair.png'
import DinnerWagon from '../../../../images/Icons/Diner Wagon.png'
import Bed from '../../../../images/Icons/bed.png'
import DressingTable from '../../../../images/Icons/Dressing Table.png'
import Wardrobe from '../../../../images/Icons/Wardrobe.png'
import Mattress from '../../../../images/Icons/Mattress.png'
import ChestOfDrawers from '../../../../images/Icons/Chest Of Drawers.png'
import ReadingTable from '../../../../images/Icons/Reading Table.png'
import loktok from '../../../../images/Icons/SmartFit.png'
import Kitchen from '../../../../images/Icons/Kitchen.png'
import Door from '../../../../images/Icons/Door.png'
import ExecutiveTable from '../../../../images/Icons/Executive Table.png'



const Category = () => {
    return (
        <div className='mt-5'>
        <div className="container">
        <h3 style={{ color: "#A25B0F" }} className="fw-bold"> <i><span style={{color:'#6c757d'}}>Popular Furniture</span> By Choice</i></h3>
        <p style={{color:'#6c757d'}} >Categories our customers love to check out.</p>
         
        <div class="row row-cols-2 row-cols-md-6 g-4 mt-4">
            {/* item 1  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={sofa} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Sofa</h6>
                </div>
            </div>
            {/* item 2  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={centerTable} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Center Table</h6>
                </div>
            </div>
            {/* item 3  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={diban} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Divan</h6>
                </div>
            </div>
            {/* item 4  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={tVCabinet} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>TV Cabinet</h6>
                </div>
            </div>
            {/* item 5  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={openShelves} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Open Shelves</h6>
                </div>
            </div>
            {/* item 6  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={Dining} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Dining</h6>
                </div>
            </div>
            {/* item 7  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={DiningChair} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Dining Chair</h6>
                </div>
            </div>
            {/* item 8  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={DinnerWagon} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Dinner Wagon</h6>
                </div>
            </div>
            {/* item 9  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={Bed} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Bed</h6>
                </div>
            </div>
            {/* item 10  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={DressingTable} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Dressing Table</h6>
                </div>
            </div>
            {/* item 11  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={Wardrobe} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Wardrobe</h6>
                </div>
            </div>
            {/* item 12  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={Mattress} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Mattress</h6>
                </div>
            </div>
            {/* item 13  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={ChestOfDrawers} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Chest Of Drawers</h6>
                </div>
            </div>
            {/* item 14  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={ReadingTable} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Reading Table</h6>
                </div>
            </div>
            {/* item 15  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={loktok} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>SmartFit</h6>
                </div>
            </div>
            {/* item 16  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={Kitchen} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Kitchen</h6>
                </div>
            </div>
            {/* item 17  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={Door} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Door</h6>
                </div>
            </div>
            {/* item 18  */}
            <div id='card' className="col">
                <div style={{height:'150px',width:'150px',border:'1px solid #6c757d'}} className='pt-4'>
                    <img style={{height:'50px',width:'50px'}} src={ExecutiveTable} alt="" />
                    <h6 style={{ color: "#A25B0F" }} className='fw-bold'>Executive Table</h6>
                </div>
            </div>



            
            </div>
        </div>  
        </div>
    );
};

export default Category;