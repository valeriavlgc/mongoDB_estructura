db.createCollection('proveedores');
db.createCollection('clientes');
db.createCollection('gafas');


db.proveedores.insert({"nombre": "gafotas", "telefono": "777-999-333", "fax": "93-554-8654","NIF": "45.612.312J", 
					   "direccion": {
							"calle": "provenza",
							"numero": 123,
							"piso": 2,
							"puerta": "b",
							"codPostal": "08015",
							"ciudad": "barcelona",
							"pais": "españa"
						 }});
  
db.clientes.insert({"nombre": "juan", "cp": "09965", "tel": "912-654-888","email": "juan@gmail.com", "fecha_reg": "2021-03-05",
    				"compras": [
						{
						  "vendedor": "jorge",
						  "gafas_id": 1
						},
						{
						  "vendedor": "susane",
						  "gafas_id": 2
						}
					 ]});
  
db.gafas.insert({"proveedor": 1,"marca": "lewis","graduacion": 1.5,"tipo": "metalica", "color": "verde","precio": 45});
