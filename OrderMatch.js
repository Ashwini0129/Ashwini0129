import React from 'react'
 
 
function OrderMatch(){

return(
    
    <div class="container">
    <div class="Buyer-container">
        <h2>Buy Shares</h2>
        <label>Client Id &emsp; &emsp;&emsp;&emsp;   &emsp;  &emsp;Client Name</label><br/>
            <input type="text" placeholder="Client Id" class="cid"/>
            <input type="text" placeholder="Client Name" disabled="true" class="clientName"/>
        <label >Instrument Id&emsp; &emsp;&emsp;   &emsp;Instrument name</label><br/>
            <input type="text" placeholder="Instrument Id" class="instrumentId"/>
            <input type="text" placeholder="Instrument Name" disabled="true" class="instrumentName"/>
        <label >Face value&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;exp date</label><br/>
            <input type="text" placeholder="Face Value" class="faceValue"/>
            <input type="text" placeholder="Exp Date" disabled="true" class="expDate"/>
        <label>Prize&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;   &emsp;Quantity</label><br/>
            <input type="text" placeholder="Prize" class="prize"/>
            <input type="text" placeholder="Quantity" disabled="true" class="quantity"/>

    </div>
    <div class="seller-container">
        <h2>Sell Shares</h2>
            <label>Client Id &emsp; &emsp;&emsp;&emsp;&emsp;   &emsp;Client Name</label><br/>
            <input type="text" placeholder="Client Id" class="cid" />
            <input type="text" placeholder="Client Name" disabled="true" class="clientName"/>
        <label>Instrument Id&emsp; &emsp;&emsp; &emsp;Instrument name</label><br/>
            <input type="text" placeholder="Instrument Id" class="instrumentId"/>
            <input type="text" placeholder="Instrument Name" disabled="true" class="instrumentName"/>
        <label>Face value&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;exp date</label><br/>
            <input type="text" placeholder="Face Value" class="faceValue"/>
            <input type="text" placeholder="Exp Date" disabled="true" class="expDate"/>
        <label>Price&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;  &emsp; &emsp;Quantity</label><br/>
            <input type="text" placeholder="Price" class="prize"/>
            <input type="text" placeholder="Quantity" disabled="true" class="quantity"/>
    </div>
   
    <div class='txn'>
 
 <button type="button" class="btn btn-success">Success</button>
 
 </div>
</div>



)
}
export default OrderMatch;