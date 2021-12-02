db.createCollection('clientes');
db.createCollection('pedidos');
db.createCollection('productos');
db.createCollection('tiendas');


db.clientes.insert({"_id": 1, "nombre": "Juan", "apellido": "Fernández", "direccion":"calle provenza, 21", "cp": "09111",
                    "localidad": "Barcelona", "provincia": "Barcelona", "telefono": "658769845"})


db.pedidos.insert({"_id": 1, "cliente_id": 1, "tienda_id": 1, "fecha": "2020-05-03 15:25",
                   "tipo": "domicilio", "precio": 49, "fecha_entrega": "2020-05-03 15:55", "repartidor": "Maia", 
				   "productos":
				   [{"producto_id": 1, "cantidad": 1}, {"producto_id": 2, "cantidad": 2}]});

db.productos.insert({"_id": 1, "nombre": "pizza margarita", "descripcion": "pizza con queso y tomate",
                     "categoria": "pizza", "imagen": "/imagen/pizza.svg", "precio": "45"});

db.tiendas.insert({"_id": 1, "direccion": "avenida diagonal, 25", "cp": "12456", "localidad": "Barcelona", "provincia": "Barcelona",
                   "empleados": [{ "nombre": "Pau", "apellido": "Dertu", "NIF": "12345678L", "tel": "654321354", "trabajo": "cocinero"},
                                 { "nombre": "Maria", "apellido": "Larreta", "NIF": "16567876L", "tel": "665763409", "trabajo": "repartidor"}]});