function getNumbers(){
	return new promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000);
	});
}

getNumbers().then((numbers)=>{
	return new promise((resolve)=>{
	   setTimeout(()=>{
		   const evens = numbers.filter(num => num%2 === 0);
		   document.getElementById("output").textContent =`Filter Evens: ${even.join(", ")}`;
		   resolve(evens);
	   },1000);
	});
})

.then((evenNumbers) =>{
	return new promise ((resolve)=>{
		setTimeout(()=>{
			const doubled = evenNumbers.map(num => num*2);
			document.getElementById("output").textContent = `Doubled Evens: ${doubled.join(", ")}`;
			resolve(doubled);
		},2000);
	});
});