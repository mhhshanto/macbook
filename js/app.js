// memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    const memory =  document.getElementById('memory-price').innerHTML
    if(memory == 180){
     document.getElementById('memory-price').innerHTML = 0
     const price = document.getElementById('total-price').innerHTML
     const newPrice = parseInt(price)
     document.getElementById('total-price').innerHTML = newPrice - 180
     const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
    }else{
        document.getElementById('memory-price').innerHTML = 0
    }
})
document.getElementById('memory-16gb').addEventListener('click',function(){
   const memory =  document.getElementById('memory-price').innerHTML
   if(memory == 0){
    document.getElementById('memory-price').innerHTML = 180
    const price = document.getElementById('total-price').innerHTML
    const newPrice = parseInt(price)
    document.getElementById('total-price').innerHTML = newPrice + 180
    const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
   }
})
// storage
document.getElementById('storage-256gb').addEventListener('click',function(){
    const memory =  document.getElementById('storage-price').innerHTML
    if(memory == 100){
     document.getElementById('storage-price').innerHTML = 0
     const price = document.getElementById('total-price').innerHTML
     const newPrice = parseInt(price)
     document.getElementById('total-price').innerHTML = newPrice - 100
     const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
    }else if(memory == 180){
        document.getElementById('storage-price').innerHTML = 0
        const price = document.getElementById('total-price').innerHTML
        const newPrice = parseInt(price)
        document.getElementById('total-price').innerHTML = newPrice - 180
        const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
    }
    else{
        document.getElementById('storage-price').innerHTML = 0
    }
})
document.getElementById('storage-512gb').addEventListener('click',function(){
   const memory =  document.getElementById('storage-price').innerHTML
   if(memory == 0){
    document.getElementById('storage-price').innerHTML = 100
    const price = document.getElementById('total-price').innerHTML
    const newPrice = parseInt(price)
    document.getElementById('total-price').innerHTML = newPrice + 100
    const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
   }
   else if(memory == 180){
    document.getElementById('storage-price').innerHTML = 100
    const price = document.getElementById('total-price').innerHTML
    const newPrice = parseInt(price)
    document.getElementById('total-price').innerHTML = newPrice - 80
    const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
}
   
}
)
document.getElementById('storage-1tb').addEventListener('click',function(){
    const memory =  document.getElementById('storage-price').innerHTML
    if(memory == 0){
     document.getElementById('storage-price').innerHTML = 180
     const price = document.getElementById('total-price').innerHTML
     const newPrice = parseInt(price)
     document.getElementById('total-price').innerHTML = newPrice + 180
     const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
    }
    else if(memory == 100){
        document.getElementById('storage-price').innerHTML = 180
        const price = document.getElementById('total-price').innerHTML
        const newPrice = parseInt(price)
        document.getElementById('total-price').innerHTML = newPrice + 80
        const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
    }
    
 }
 )
// delivery
document.getElementById('regular-delivery').addEventListener('click',function(){
    const memory =  document.getElementById('delivery-price').innerHTML
    if(memory == 20){
     document.getElementById('delivery-price').innerHTML = 0
     const price = document.getElementById('total-price').innerHTML
     const newPrice = parseInt(price)
     document.getElementById('total-price').innerHTML = newPrice - 20
     const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
    }else{
        document.getElementById('delivery-price').innerHTML = 0
    }
})
document.getElementById('fast-delivery').addEventListener('click',function(){
   const memory =  document.getElementById('delivery-price').innerHTML
   if(memory == 0){
    document.getElementById('delivery-price').innerHTML = 20
    const price = document.getElementById('total-price').innerHTML
    const newPrice = parseInt(price)
    document.getElementById('total-price').innerHTML = newPrice + 20
    const totall = document.getElementById('total-price').innerHTML 
document.getElementById('total').innerHTML = totall
   }
})
function promoCode(){
  const input = document.getElementById('promo-input').value
  if(input == "s"){
    const price = parseInt(document.getElementById('total-price').innerHTML )
    var offer = price / 5
    document.getElementById('total-price').innerHTML = price - offer
    const totall = document.getElementById('total-price').innerHTML 
    document.getElementById('total').innerHTML = totall
  }
  else{
    alert("Wrong coupon!");
  }
}