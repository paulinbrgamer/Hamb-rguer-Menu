var menu = [['Cheese Burguer',35,0],['Cheese Burguer Duplo',30,0],['Cheese Burger Triplo',25,0],['Cheese Burger Salada',40,0],['Cheese Frango',32,0],['Cheese Bacon',28,0],['Cheese Eggs',20,0],['Master burguer',25,0],['Coca Cola',5,0],['Guaraná',4,0]]
var id_pedidos = new Set();
var modal = document.getElementById("md")
var p1 = document.getElementById('item-car')

function fecharModal(){
    modal.style.display = 'none'
}
function abrirModal(){ 
    modal.style.display = 'flex'
}
function addCarro(dados){
        menu[dados][2]++ 
        var botao = document.createElement('button')
        botao.textContent = 'Remover'
        botao.id = `bo${dados}`
        botao.classList.add('button-item')
        botao.onclick = function remover(){
            if (menu[dados][2] > 0){
                menu[dados][2]--
                if (id_pedidos.has(dados)){
                    
                    var s = document.getElementById(`ti${dados}`)
                    var d = document.getElementById(`pe${dados}`)
                    var f = document.getElementById(`qu${dados}`)
                    var botao = document.getElementById(`bo${dados}`)
                    p1.removeChild(s)
                    p1.removeChild(d)
                    p1.removeChild(f)
                    p1.removeChild(botao)
                    id_pedidos.delete(dados)
                    document.getElementById('foter').innerHTML = `(${id_pedidos.size}) Veja Seu Carrinho`
                }
                
                
        

            }
            
        }
        var titulo =document.createElement('h3')
        titulo.textContent = `${menu[dados][0]}`
        titulo.id = `ti${dados}`
        var preco= document.createElement('p')
        preco.textContent = `Quantidade: ${menu[dados][2]}`
        preco.id = `pe${dados}`
        var quantos = document.createElement('p')
        quantos.id = `qu${dados}`
        quantos.textContent = `R$${menu[dados][1]*menu[dados][2]},00`
        if (id_pedidos.has(dados)){
            
            var s = document.getElementById(`ti${dados}`)
            var d = document.getElementById(`pe${dados}`)
            var f = document.getElementById(`qu${dados}`)
            var botao = document.getElementById(`bo${dados}`)
            p1.removeChild(s)
            p1.removeChild(d)
            p1.removeChild(f)
            p1.removeChild(botao)
            document.getElementById('foter').innerHTML = `(${id_pedidos.size}) Veja Seu Carrinho`
        }
        id_pedidos.add(dados)
        p1.appendChild(titulo)
        p1.appendChild(preco)
        p1.appendChild(quantos)
        p1.appendChild(botao)
        document.getElementById('foter').innerHTML = `(${id_pedidos.size}) Veja Seu Carrinho`


}
