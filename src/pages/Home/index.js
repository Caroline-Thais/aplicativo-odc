import React from 'react';
import { View, Text, Button, Image } from 'react-native';

function Home( { navigation } ) {
    return (     
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: "lightsalmon" }}>
            <Text style={{ margin: 30, fontSize: 20}}>Orações do Consagrado</Text>
             
           
            
            <Image style = {{margin: 10, width: 300, height: 200, resizeMode: 'contain'}}
            source={{
                uri: 'https://reconquista.arautos.org/wp-content/uploads/2020/06/PHOTO-2020-06-22-21-18-28.jpg'
            }}/>
            
            <View>
            {/* Não funciona, pois já estamos na página sobre */}
            <Button style={{ flex: 1, alignItems: 'center', padding:'2em'}}
                  title="Ladainha do Espírito Santo"
                  onPress={() => navigation.navigate('LES')}
              />
            
            <Button style={{ flex: 1, alignItems: 'center', padding:'2em'}}
                  title="Ladainha de Nossa Senhora"
                  onPress={() => navigation.navigate('LNS')}
              />

            <Button style={{ flex: 1, alignItems: 'center', padding:'2em'}}
                  title="Vem Ó Espírito Criador"
                  onPress={() => navigation.navigate('VOEC')}
              />
              {/* Volta para a rota anterior */}
              <Button 
                  title="Voltar rota anterior"
                  onPress= {() => {navigation.goBack()}}
              />
        </View>
        </View>

        
        
    );
}

export default Home;