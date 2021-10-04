/**
 * endpoint donde se va consumir la api rest
 */
 const endpoint = "https://g91f80c6f2313d9-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"
 const etp = document.getElementById("informacion")
 const btnnuevo = document.getElementById("guardar")
 const btnver = document.getElementById("ver")
 const btnact = document.getElementById("actualizar")
 const btndel = document.getElementById("eliminar")
 
 /**
  * consumiento metodo get la Api de Cloud para visualizar en el cliente 
  */
 
 function peticionGet() {
 
     $.ajax({
 
         method: "GET",
         url: endpoint,
         success: function (data) {
             //console.log(data)
             getclient(data.items)
             mostrarclient(data.items)
 
 
         },
         error: function (error) {
             console.log("Error al Consumir Api Oracle Cloud ")
         }
     });
 
 }
 
 
 function getclient(clients) {
 
     let cadena = ""
 
     clients.forEach(client => {
         cadena += "<p>id:" + client.id + "</p>" +
             "<p>name:" + client.name + "</p>" +
             "<p>email:" + client.email + "</p>" +
             "<p>age:" + client.age + "</p>"
     }
     );
     console.log(etp)
     console.log(cadena)
     etp.innerHTML = cadena
 }
 
 /**
  * 
  * funcion mostrar client
  */
 function mostrarclient(clients) {
     console.log("***************************")
     clients.forEach(client => {
         console.log("id client " + client.id)
         console.log("name client " + client.name)
         console.log("email client " + client.email)
         console.log("ege client " + client.age)
         console.log("***************************")
     }
     )
 }
 
 
 
 /**funcion para peticion post */
 function peticionPost() {
 
     const data = {
         id:16,
         name:"andrea",
         email:"juan@correo.co",
         age:33
     }
     let datasend = JSON.stringify(data)
 
     $.ajax({
 
         method: "POST",
         url: endpoint,
         data: datasend,
         dataType: 'json',
         contentType: "application/json",
         complete: function (response) {
             console.log(response.status)
         },
         error: function (error) {
 
         }
     });
 
 }
 /**peticion put */
 
 function peticionPut() {
 
     const data = {
        id: 35,
        name: "alberto",
        email: "alberto@correo.co",
        age: 62
     }
     let datasend = JSON.stringify(data)
     $.ajax({
 
         method: "PUT",
         url: endpoint,
         data: datasend,
         dataType: 'json',
         contentType: "application/json",
         complete: function (response) {
             console.log("Actualizo Registro!!!")
         },
         error: function (error) {
 
         }
     });
 }
 /**funcion delete */
 function peticionDelete() {
 
     const data = {
         id:77
     }
     let datasend = JSON.stringify(data)
     $.ajax({
 
         method: "DELETE",
         url: endpoint,
         data: datasend,
         dataType: 'json',
         contentType: "application/json",
         complete: function (response) {
             console.log("Elimino Registro!!")
         },
         error: function (error) {
 
         }
     });
 }
 
 
 
 
 
 //peticionGet()
 
 btnnuevo.addEventListener("click", (e) => {
     e.preventDefault()
     peticionPost()
 })
 btnact.addEventListener("click", (e) => {
     e.preventDefault()
     peticionPut()
 })
 btndel.addEventListener("click", (e) => {
     e.preventDefault()
     peticionDelete()
 })
 
 btnver.addEventListener("click", (e) => {
     e.preventDefault()
     peticionGet()
 })