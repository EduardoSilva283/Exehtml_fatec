function graus(){

var grau = document.getElementById('graus').value;
var tipo = document.getElementById('select').value;

if (tipo == 'Fahrenheit'){
  
    document.getElementById('result').innerHTML = ("Celsius " + (grau - 32 ) / 1.8 );

}else{
    document.getElementById('result').innerHTML = ("Fahrenheit " + ((grau * 1.8 ) + 32) );
}

}

function Vendas(){
    var prod1 = document.getElementById('prod1').value;
    var prod2 = document.getElementById('prod2').value;
    var prod3 = document.getElementById('prod3').value;
    var preco1 = document.getElementById('preco1').value;
    var preco2 = document.getElementById('preco2').value;
    var preco3 = document.getElementById('preco3').value;
    var qtd1 = document.getElementById('qtd1').value;
    var qtd2 = document.getElementById('qtd2').value;
    var qtd3 = document.getElementById('qtd3').value;
    

    document.getElementById('vl_total1').innerHTML = 'Prod: ' + prod1 +' Total: R$ '+ (qtd1 * preco1)
    document.getElementById('vl_total2').innerHTML = 'Prod: ' + prod2 +' Total: R$ '+ (qtd2 * preco2)
    document.getElementById('vl_total3').innerHTML = 'Prod: ' + prod3 +' Total: R$ '+ (qtd3 * preco3)
}

function calcula_m2(){
    var vl_alt = document.getElementById('vl_alt').value;
    var vl_lar = document.getElementById('vl_lar').value;

    document.getElementById('vl_m2').innerHTML = vl_alt * vl_lar + "m²";
    document.getElementById('tt_vl_m2').innerHTML = "Valor Total: R$ " + (vl_alt * vl_lar) * 36+',00';
    
    
}

function calcula_gasto(){
    var vl_vc = document.getElementById('vl_vc').value;
    var vl_km = document.getElementById('vl_km').value;
    var km_li = document.getElementById('km_li').value;
    document.getElementById('vl_gt').innerHTML = "R$ " + (vl_km / km_li) * vl_vc
    

    
}

function calcula_imc(){

	var select = document.getElementById('sx_m');
	var text = select.options[select.selectedIndex].text;
    document.getElementById('vl_imc').innerHTML = 1;
    document.getElementById('total_imc').innerHTML = 2;


}