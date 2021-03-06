import React, { useState,useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, Button, TouchableOpacity, TouchableOpacityProps, RecyclerViewBackedScrollViewComponent, } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import logoSideBar from '../assets/logoSideBar.png';
import iconSideBar from '../assets/iconSideBar.png';
import iconSideBarSelected from '../assets/iconSideBarSelected.png';

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'; /*This import is useful for change the notification bar´s color */

import { useNavigation } from '@react-navigation/core'
import { Coleta } from '../pages/Coleta';
import { Entypo } from '@expo/vector-icons';

interface SideBarProps extends TouchableOpacityProps {
    title: string
}

export function SideBar({ title, ...rest }: SideBarProps) {

    const navigation = useNavigation();
   
    //This function gonna make the side´s bar appear and desappear
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => {
        setSideBar(!sideBar)
    }

    //this function goona make the color of selected route
    const [selectedHomeRoutes, setSelectedHomeRoutes] = useState(false);
    const [selectedEcoPontoRoutes, setSelectedEcoPontoRoutes] = useState(false);
    const [selectedFiscalRoutes, setSelectedFiscalRoutes] = useState(false);
    const [selectedColetaRoutes, setSelectedColetaRoutes] = useState(false);

    // all of this Ifs is for only select one for time
    const selectHome = () => {
        if (selectedHomeRoutes == false ) {
            setSelectedHomeRoutes(!selectedHomeRoutes)
        
            if (selectedEcoPontoRoutes == true) {
                setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
            }
            if (selectedFiscalRoutes == true) {
                setSelectedFiscalRoutes(!selectedFiscalRoutes)
            }
            if (selectedColetaRoutes == true) {
                setSelectedColetaRoutes(!selectedColetaRoutes)
            }
            
            setSideBar(!sideBar)
            navigation.navigate('Home')
        }
    };

    const selectEcoPonto = () => {
        if (selectedEcoPontoRoutes == false) {
            setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)

            if (selectedHomeRoutes == true ) {
                setSelectedHomeRoutes(!selectedHomeRoutes)
            }
            if (selectedFiscalRoutes == true ) {
                setSelectedFiscalRoutes(!selectedFiscalRoutes)
            }
            if (selectedColetaRoutes == true ) {
                setSelectedColetaRoutes(!selectedColetaRoutes)
            }

            setSideBar(!sideBar)
            navigation.navigate('EcoPonto')
        }
    };

    const selectFiscal = () => {
        if (selectedFiscalRoutes == false) {
            setSelectedFiscalRoutes(!selectedFiscalRoutes)

            if (selectedEcoPontoRoutes == true) {
                setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
            }
            if (selectedHomeRoutes == true) {
                setSelectedHomeRoutes(!selectedHomeRoutes)
            }
            if (selectedColetaRoutes == true) {
                setSelectedColetaRoutes(!selectedColetaRoutes)
            }
           
            setSideBar(!sideBar)
            navigation.navigate('Cidadao')
        }
    };

    const selectColeta = () => {
        if (selectedColetaRoutes == false) {
            setSelectedColetaRoutes(!selectedColetaRoutes)
            
            if (selectedEcoPontoRoutes == true) {
                setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
            }
            if (selectedFiscalRoutes == true) {
                setSelectedFiscalRoutes(!selectedFiscalRoutes)
            }
            if (selectedHomeRoutes == true) {
                setSelectedHomeRoutes(!selectedHomeRoutes)
            }

            setSideBar(!sideBar)
            navigation.navigate('Coleta')
        }
    };

    useEffect(()=>{
        setSelectedHomeRoutes(title =='Home' ? true : false);
        setSelectedEcoPontoRoutes(title =='EcoPonto' ? true : false);
        setSelectedFiscalRoutes(title == 'Cidadão Fiscal' ? true : false)
        setSelectedColetaRoutes(title =='Coleta de Lixo' ? true :false)
    })
    return (
        <SafeAreaView style={styles.all}>
            <View style={styles.container}>
                <GeneralStatusBarColor backgroundColor="#32B768" />
                    <TouchableOpacity activeOpacity={0.7} onPress={showSideBar}>
                        <Text>
                            <Entypo name="list" style={styles.icon}  />
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.nameBar}>
                        {title}
                    </Text>
            </View>

            {/*Start the Side´s bar part ---------------------------------------------------------------------------------------------------------------------------------*/}

            <View style={sideBar ? styles.activeSideMenu : styles.sideMenu} >
                <Text style={styles.positionIcon}>
                    <TouchableOpacity activeOpacity={0.7} onPress={showSideBar}>
                         <Entypo name="chevron-small-left" style={styles.sideIcon}  />
                    </TouchableOpacity>
                </Text>

                <Image source={logoSideBar} style={styles.sideImg} resizeMode="contain" />

                <Text style={styles.title}>
                    Conscientiza PN
                </Text>

                <Text style={styles.subtitle}>
                    Opções
                </Text>

{/*Side´s bar routes ------------------------------------------------------------------------------------------------------------------------------------ */}

                <View style={styles.ways}>
                    <TouchableOpacity activeOpacity={0.7} onPress={selectHome}>
                        <View style={selectedHomeRoutes ? styles.activeComponentWay : styles.componentWay } >
                            <Image source={selectedHomeRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain"/>
                            <Text style={selectedHomeRoutes ? styles.activeNameWay : styles.nameWay}>Home</Text>
                        </View>
                    </TouchableOpacity>                    

                    <TouchableOpacity activeOpacity={0.7} onPress={selectEcoPonto}>
                        <View style={selectedEcoPontoRoutes ? styles.activeComponentWay : styles.componentWay}>
                            <Image source={selectedEcoPontoRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain" />
                            <Text style={selectedEcoPontoRoutes ? styles.activeNameWay : styles.nameWay}>EcoPonto</Text>
                        </View>
                    </TouchableOpacity>                    

                    <TouchableOpacity activeOpacity={0.7} onPress={selectFiscal}>
                        <View style={selectedFiscalRoutes ? styles.activeComponentWay : styles.componentWay}>
                            <Image source={selectedFiscalRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain" />
                            <Text style={selectedFiscalRoutes ? styles.activeNameWay : styles.nameWay}>Cidadão Fiscal</Text>
                        </View>
                    </TouchableOpacity>                   

                    <TouchableOpacity activeOpacity={0.7} onPress={selectColeta}>
                        <View  style={selectedColetaRoutes ? styles.activeComponentWay : styles.componentWay }>
                            <Image source={selectedColetaRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain"/>
                            <Text style={selectedColetaRoutes ? styles.activeNameWay : styles.nameWay}>Coleta de Lixo</Text>
                        </View>
                    </TouchableOpacity>   
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        alignItems: 'center'
    },
    /*TopBar--------------------------------------------------- */
    container: {
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
    icon: {
        position: 'absolute',
        marginHorizontal: 19,
        marginTop: -9,
        marginLeft: -10,

        fontSize: 24,
        lineHeight: 20,
        color: colors.white,
    },
    nameBar: {
        position: 'absolute',
        marginLeft: 72,

        fontFamily: fonts.text,
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 24,
        color: colors.white
    },
    /*SideBar--------------------------------------------------- */
    sideMenu: {
        backgroundColor: colors.white,
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: 0,
        marginRight: 85,
        overflow: 'hidden', //Aqui téra que haver algo que deixe a barra invisivel
    },
    activeSideMenu: {
        backgroundColor: colors.white,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        height: 640,
        width: 280,
        overflow: 'hidden',
    },
    title: {
        position: 'absolute',
        textAlign: 'right',
        marginTop: 135,
        marginLeft: 16,

        fontSize: 20,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 24
    },
    subtitle: {
        position: 'absolute',
        textAlign: 'right',
        marginTop: 175,
        marginLeft: 16,

        fontSize: 14,
        fontFamily: fonts.complement,
        color: colors.heading
    },
    sideImg: {
        position: 'absolute',
        marginTop: 64,
        marginLeft: 16,
        height: 55,
        width: 55,

        alignContent: 'space-between'
    },
    positionIcon: {
        position: 'absolute',
        textAlign: 'right',
        marginTop: 70,
        marginLeft: '65%',
    },
    sideIcon: {
        fontSize: 34,
        color: colors.heading
    },

    /*App Ways--------------------------------------------------- */

    ways: {
        position: 'absolute',
        marginTop: 210,
        borderTopColor: colors.gray,
        borderTopWidth: 1,

        width: '100%',
        flexDirection: 'column'
    },
    componentWay: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 5,
        flexDirection: 'row',
    },
    activeComponentWay: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',

        backgroundColor: colors.backgroundSelected
    },
    nameWay: {
        marginLeft: 5,
        marginTop: 4,

        fontFamily: fonts.text,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.heading
    },
    activeNameWay: {
        marginLeft: 5,
        marginTop: 4,

        fontFamily: fonts.text,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.green
    },
});