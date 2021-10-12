


## 1. CREAR PROYECTO
### INSTALACION

    - Si es nuevo en el desarrollo de dispositivos móviles , la forma más sencilla de comenzar es con Expo CLI. Expo es un conjunto de herramientas construido alrededor de React Native y, si bien tiene muchas características , la característica más relevante para nosotros en este momento es que puede hacer que escriba una aplicación React Native en minutos. Solo necesitará una versión reciente de Node.js y un teléfono o emulador. Si desea probar React Native directamente en su navegador web antes de instalar cualquier herramienta, puede probar Snack .

    Si ya está familiarizado con el desarrollo móvil , es posible que desee utilizar React Native CLI. Requiere Xcode o Android Studio para comenzar. Si ya tiene una de estas herramientas instalada, debería poder empezar a trabajar en unos minutos. Si no están instalados, debería esperar pasar aproximadamente una hora instalándolos y configurándolos.

    - Suponiendo que tiene Node 12 LTS o superior instalado, puede usar npm para instalar la utilidad de línea de comandos Expo CLI:

    - Luego, ejecute los siguientes comandos para crear un nuevo proyecto React Native llamado "MyProject":

    $ expo init my-project

    $ cd my-project
    $ npm start 
    
    - You can also use: expo start

    $ expo start

    - Esto iniciará un servidor de desarrollo para usted.

    - Variaciones    
    $ npm run web
    $ npm run android (Emulador en PC)
    $ npm run ios (Emulador en PC)
    $ Codigo QR (Android cel real - IOS cel real)



## 2. ENTRAR AL PROYECTO Y EJECUTAR

    - $ cd my-project
    - $ npm start 



## 3. LIMPIAR EL PROYECTO

    - Borrar contenido sobrante del proyecto y dejarlo en limpio 
    
    1. Borrar el texto que aparece en el archivo App.js

    2. Borrar la clase style del View

    3. Borrar el StyleSheet de container



## 4. ENLAZAR EL PROYECTO

    ( COPIAR LO MISMO DE NEXT )


## 5. INSTALAR DEPENCIAS

### Styled Components

    - npm i styled-components

    - npm i @types/styled-components

### Icons - FontAwesome

    - Iconos para el framework de react native

        $ npm i --save react-native-svg
        $ npm i --save @fortawesome/fontawesome-svg-core
        $ npm i --save @fortawesome/free-solid-svg-icons
        $ npm i --save @fortawesome/free-brands-svg-icons
        $ npm i --save @fortawesome/free-regular-svg-icons
        $ npm i --save @fortawesome/react-native-fontawesome

### React Native Linear gradient

    $ expo install expo-linear-gradient

    Ejemplo:

        import * as React from 'react';
        import { StyleSheet, Text, View } from 'react-native';
        import { LinearGradient } from 'expo-linear-gradient';

        export default function App() {
        return (
            <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <LinearGradient
                // Button Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>
                <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
            </View>
        );
        }

### React Navigation

    - Navegation for react native

        $ npm install @react-navigation/native

        - Installing dependecies into an Expo

        $ expo install react-native-screens react-native-safe-area-context


        - There are 3 types of navigation in mobile development

        - Types of navigation

            1. Tabs navigations ( Botones tipo back - Menus con botones )
            2. Drawer natigations ( Menus Desplegables )
            3. Stack navigation ( Ventanas apiladas )

        

            - Install for tabs navigations

                $ npm install @react-navigation/bottom-tabs


            - Install for drawer navigations

                $ npm install @react-navigation/drawer

                - If you have a Expo managed project, in your project directory, run:

                $ expo install react-native-gesture-handler react-native-reanimated


            - Install for stack navigation

                $ npm install @react-navigation/stack

                - If you have a Expo managed project, in your project directory, run:

                $ expo install react-native-gesture-handler

### React Native Elements

    - UI para React Native

        $ npm install react-native-elements




## 6. AGREGAR COMPONENTS BASE



## 7 CREAR CARPETAS

    - Creamos una estructura de carpetas base para el proyecto 
        ( La estructura de carpetas en react native va por fuera - En la raiz )

        1. Estructura basica

            - screens
            - navigations
            - android
            - ios 


        2. Estructura avanzada