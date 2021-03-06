import React  from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import imageSacoLixo from '../../assets/garbage.png';
import imageRec from '../../assets/trash-can.png';
import imageLata1 from '../../assets/dump.png';
import imageSeletiva from '../../assets/seletiva.png';
import { StatusBarTop } from '../../components/StatusBarTop';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Seletiva() {

    return (
        <SafeAreaView style={styles.container}>   
            <StatusBarTop 
                title={'Coleta Seletiva'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />

            <ScrollView>
                <View style={styles.description}>            
                    <Text style={styles.textDescription}>  
                        A coleta seletiva é um método que otimiza os processos de destinação dos resíduos
                        e rejeitos. Ela exige que haja uma separação dos lixos em úmidos, secos, recicláveis
                        e orgânicos. 
                    </Text>                
                </View>

                <View style={styles.viewImg}>
                    <Image source={imageSeletiva} style={styles.image} />
                </View>      

                <View>
                    <Text style={styles.textDescription}>  
                        Para manter o correto descarte de lixo, siga algumas dicas:
                    </Text>

                    <Text style={styles.textDescription}>  
                        1. Separe seu lixo.
                    </Text>

                    <Text style={styles.textDescription}>  
                        Separe seu lixo dividindo-o em dois grupos: os recicláveis e os
                        não recicláveis.
                    </Text>   

                    <View style={styles.viewImg}>
                        <Image source={imageRec} style={styles.image} />
                    </View>                    

                    <Text style={styles.textDescription}>  
                        2. Seja pratico.
                    </Text>

                    <Text style={styles.textDescription}>  
                        Para facilitar a sua vida, coloque pequenas lixeiras ou sacos
                        com as indicações de quais tipos de materiais cada um a deve conter.
                    </Text>   

                    <View style={styles.viewImg}>
                        <Image source={imageSacoLixo} style={styles.image} />
                    </View>  

                    <Text style={styles.textDescription}>  
                        3. Recicle.                   
                    </Text>

                    <Text style={styles.textDescription}>  
                        Separados os recicláveis, também é aconselhável que os materiais
                        recicláveis estejam sempre limpos e secos, para facilitar o processos
                        de reciclagem.
                    </Text>  

                    <View style={styles.viewImg}>
                        <Image source={imageLata1} style={styles.image} />
                    </View> 
                    
                </View>

                <View>
                    
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    /*Global -------------------------------------------- */
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background
    },
    description: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,        
    }, 
    textDescription: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 17,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        color: colors.heading,
    },

    /*Image -------------------------------------------- */
    img: {
        height: Dimensions.get('window').width * 0.7,
    },
    viewImg: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'        
    },
    image: {
        height: 65,
        width: 65,
        marginLeft: 5
    },

    /* Buttom -------------------------------------------- */
    buttom: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
        borderRadius: 16,
        marginBottom: 6
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 23,
        fontWeight: 'bold'
    },    
    bar: {
        flex: 1,
        position: 'absolute',
        textAlign: 'left',
        justifyContent: 'center',
        width: '100%',
        height: 56,
        marginTop: 24,
        backgroundColor: colors.green,
        paddingLeft: 19,
        paddingBottom: 24
    },
    nameBar: {
        position: 'absolute',
        marginLeft: 72,

        fontFamily: fonts.text,
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 55,
        color: colors.white
    },

})