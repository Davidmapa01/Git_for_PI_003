const {Router} = require("express");
const router = Router();

//  Esta es la página de inicio de sesión, donde se introduce la contraseña para identificar al usuario
router.get("/login", (req, res) => {
    res.send("Página de inicio de sesión<br><br>"
        + "Donde la persona debe ingresar usuario y contraseña para acceder a la aplicación.");
    console.log("Mostrando pagina de inicio de sesion");
});

//  Página principal de la aplicación donde se muestra el mapa y algunas mascotas o cuidadores cercanos
router.get("/main", (req, res) => {
    res.send("Página de principal de inicio<br><br>"
        + "Donde se muestra el mapa y algunas mascotas o cuidadores cercanos");
});

//  Página general de mascotas donde aparecerán listadas mascotas cercanas
router.get("/generalPets", (req, res) => {
    res.send("Página general de mascotas<br><br>"
        + "Donde aparecerán listadas mascotas cercanas");
});

//  Página de vista previa de mascotas, se accede cuando el usuario pincha en una mascota para ver sus características, dirección y opiniones
router.get("/previewPets", (req, res) => {
    res.send("Página de vista previa de mascota<br><br>"
        + "Donde aparecen características, dirección y opiniones de la mascota seleccionada<br>"
        + "Aquí se accede cuando el usuario pincha en el nombre/foto de perfil una mascota o en la pestaña correspondiente");
});

//  Página general de cuidadores donde aparecerán listados cuidadores cercanos
router.get("/generalPetSitters", (req, res) => {
    res.send("Página general de cuidadores de mascotas<br><br>"
        + "Donde aparecerán listados cuidadores y cuidadoras cercanos");
});

//  Página de vista previa de cuidadores, se accede cuando el usuario pincha en un cuidador para ver sus características, dirección y opiniones
router.get("/PreviewPetSitters", (req, res) => {
    res.send("Página de vista previa de cuidadores de mascotas<br><br>"
        + "Donde aparecen características, dirección y opiniones del cuidador o cuidadora seleccionado<br>"
        + "Aquí se accede cuando el usuario pincha en el nombre/foto de perfil de un cuidador o en la pestaña correspondiente");
});


module.exports = router;