
  import React from 'react';
  import { View, Text, Button, Image, StyleSheet } from 'react-native';
  import { ScrollView } from 'react-native-gesture-handler';


  function VOEC( {navigation} ) {
      return (
          <ScrollView style={styles.container}>
      

             <Text style={{ margin: 30, fontSize: 20}}>Vem Ó Espírito Criador</Text>
            <Text style={{ margin: 30, fontSize: 20}}>
            Vem, ó Espírito Criador,
As almas dos teus visita;
Os corações que criaste,
Enche de graça infinita.

Tu, Paráclito és chamado,
Dom do Pai celestial,
Fogo, caridade, fonte
Viva e unção espiritual.

Tu dás septiforme graça;
Dedo és da destra paterna;
Do Pai, solene promessa,
Dás força da voz suprema.

Acende a luz para os sentidos,
Teu amor no peito acende,
Do nosso corpo a fraqueza
Com tua força defende.
De nós afasta o inimigo.

Dá-nos a paz sem demora,
Guia-nos, e evitaremos
Tudo quanto se deplora.

Dá que Deus Pai e seu Filho
Por ti nós bem conheçamos,
E em ti, Espírito de ambos
Em todo tempo creiamos.

A Deus Pai se dê a glória
E ao Filho ressuscitado,
Paráclito e a ti também
Com louvor perpetuado.
Amém

V. Enviai o vosso espírito, e tudo será criado.

R. E renovareis a face da terra.
Oremos: Ó Deus, que instruístes os corações
dos vossos fiéis com a luz do Espírito Santo,
concedei-nos que no mesmo Espírito conheçamos o que é reto,
e gozemos sempre as suas
consolações. Por Cristo Nosso Senhor.
Amém.
            </Text>
        </ScrollView> 
         
         
      );
  }

  const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgreen',
		
	},

});
  


  export default VOEC;