db.createCollection('usuario');
db.createCollection('video');
db.createCollection('canal');
db.createCollection('comentarios');
db.createCollection('tags');
db.createCollection('likes');
db.createCollection('dislikes');

db.usuario.insert({"_id" : 1, "email" : "usuario1@gmail.com", "password" : "0000", "nombre" : "Jhon Doe", "fecha_nacimiento" : "26-12-1990 18:00", "sexo" : "M", "pais" : "UK",
                   "cp" : "00059", "canales" : 1, "suscripciones":[1], "playlists":1});

db.video.insert({"_id" : 1, "titulo" : "como montar una mesa", "descripcion": "sin descripción", "tamaño" : 6, "nombre_archivo":"mesa.mp4", "duracion": 20, "thumbnail":"thumbnail.jpg",
                 "reproducciones": 700, "likes":50, "dislikes" : 30, "estado":"publico", "tags":[2], "usuario" : 1, "fecha_publicacion" : "2022-01-01 20:20","comentarios":[2]});

db.canal.insert({"_id": 1, "nombre" : "pildoras informáticas", "descripcion" : "programación", "fecha" : "2010-12-01 10:10"});

db.comentarios.insert({"_id" : 1, "texto":"no me entero de nada", "fecha_hora": "2020-07-07 11:45", "likes": [1,2], "dislikes": [1]});

db.tags.insert({"_id" : 1, "texto": "#bricolaje"});

db.likes.insert({"_id" : 1, "usuario_id" : 1, "video_id" : 1, "fecha": "2021-07-29 18:27"});

db.dislikes.insert({"_id" : 1, "usuari_id" : 1, "video_id" : 1, "fecha": "2021-07-29 18:20"});