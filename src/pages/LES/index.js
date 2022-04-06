import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function LES( { navigation } ) {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={{ margin: 30, fontSize: 20}}>Ladainha do Espírito Santo</Text>
            <Text style={{ margin: 30, fontSize: 20}}>
            Senhor, tende piedade de nós.
Jesus Cristo, tende piedade de nós.
R. Senhor, tende piedade de nós.

Divino Espírito Santo, ouvi-nos.
Espírito Paráclito, atendei-nos.

Deus Pai dos céus, tende piedade de nós.
Deus Filho Redentor do mundo, tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.

Espírito da verdade, tende piedade de nós.
Espírito da sabedoria, tende piedade de nós.
Espírito da inteligência, tende piedade de nós.
Espírito da fortaleza, tende piedade de nós.
Espírito da piedade, tende piedade de nós.
Espírito do bom conselho, tende piedade de nós.
Espírito da ciência, tende piedade de nós.
Espírito do santo temor, tende piedade de nós.
Espírito da caridade, tende piedade de nós.
Espírito da alegria, tende piedade de nós.
Espírito da paz, tende piedade de nós.
Espírito das virtudes, tende piedade de nós.
Espírito de toda graça, tende piedade de nós.
Espírito da adoção dos filhos de Deus, tende piedade de nós.
Purificador das nossas almas, tende piedade de nós.
Santificador e guia da Igreja Católica, tende piedade de nós.
Distribuidor dos dons celestes, tende piedade de nós.
Conhecedor dos pensamentos e das intenções do coração, tende piedade de nós.
Doçura dos que começam a Vos servir, tende piedade de nós.
Coroa dos perfeitos, tende piedade de nós.
Alegria dos Anjos, tende piedade de nós.
Luz dos Patriarcas, tende piedade de nós.
Inspiração dos Profetas, tende piedade de nós.
Palavra e sabedoria dos Apóstolos, tende piedade de nós.
Vitória dos Mártires, tende piedade de nós.
Ciência dos Confessores, tende piedade de nós.
Pureza das Virgens, tende piedade de nós.
Unção de todos os Santos, tende piedade de nós.

Sede-nos propício,
R. perdoai-nos, Senhor.
Sede-nos propício,
R. atendei-nos, Senhor.

De todo o pecado, livrai-nos, Senhor.
De todas as tentações e ciladas do demônio, livrai-nos, Senhor.

De toda presunção e desesperação, livrai-nos, Senhor.
Do ataque à verdade conhecida, livrai-nos, Senhor.
Da inveja da graça fraterna, livrai-nos, Senhor.
De toda obstinação e impenitência, livrai-nos, Senhor.
De toda negligência e torpor do espírito, livrai-nos, Senhor.
De toda impureza da mente e do corpo, livrai-nos, Senhor.
De todas as heresias e erros, livrai-nos, Senhor.
De todo mau espírito, livrai-nos, Senhor.
Da morte má e eterna, livrai-nos, Senhor.
Pela vossa eterna procedência do Pai e do Filho, livrai-nos, Senhor.
Pela milagrosa conceição do Filho de Deus, livrai-nos, Senhor.
Pela vossa descida sobre Jesus Cristo batizado, livrai-nos, Senhor.
Pela vossa santa aparição na transfiguração do Senhor, livrai-nos, Senhor.
Pela vossa vinda sobre os discípulos do Senhor, livrai-nos, Senhor.
No dia do juízo, livrai-nos, Senhor.

Ainda que pecadores, nós Vos rogamos, ouvi-nos.
Para que nos perdoeis, nós Vos rogamos, ouvi-nos.
Para que Vos digneis vivificar e santificar todos os membros da Igreja, nós Vos rogamos, ouvi-nos.
Para que Vos digneis conceder-nos o dom da verdadeira piedade, devoção e oração, nós Vos rogamos, ouvi-nos.
Para que Vos digneis inspirar-nos sinceros afetos de misericórdia e de caridade, nós Vos rogamos, ouvi-nos.
Para que Vos digneis criar em nós um espírito novo e um coração puro, nós Vos rogamos, ouvi-nos.
Para que Vos digneis conceder-nos verdadeira paz e tranquilidade do coração, nós Vos rogamos, ouvi-nos.
Para que nos façais dignos e fortes para suportar as perseguições pelo amor à justiça, nós Vos rogamos, ouvi-nos.
Para que Vos digneis confirmar-nos em vossa graça, nós Vos rogamos, ouvi-nos.
Para que nos recebais no número dos vossos eleitos, nós Vos rogamos, ouvi-nos.
Para que Vos digneis atender-nos, nós Vos rogamos, ouvi-nos.
Espírito de Deus, nós Vos rogamos, ouvi-nos.

Cordeiro de Deus, que tirais o pecado do mundo,
R. enviai-nos o Espírito Santo.
Cordeiro de Deus, que tirais o pecado do mundo,
R. mandai-nos o Espírito prometido do Pai.
Cordeiro de Deus, que tirais o pecado do mundo,
R. dai-nos o Espírito bom.

Espírito Santo, ouvi-nos.
Espírito Consolador, atendei-nos.
V. Enviai o vosso Espírito e tudo será criado,
R. e renovareis a face da terra.

Oremos: Ó Deus, que instruístes os corações
dos vossos fiéis, com a luz do Espírito Santo,
concedei-nos que no mesmo Espírito conheçamos o que é reto, e gozemos sempre as suas consolações.
Por Cristo, Nosso Senhor.

Amém.
            </Text>

            

              {/* Volta para a rota anterior */}
              <Button 
                  title="Voltar rota anterior"
                  onPress= {() => {navigation.goBack()}}
              />

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightblue',
       		
	},

});
  

export default LES;