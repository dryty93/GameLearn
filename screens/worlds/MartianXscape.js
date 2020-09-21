import React,{useRef} from 'react';
import {Image,
        PanResponder,
        ImageBackground,
        Dimensions,
        View,
        Text,
        TextInput,
        Animated} from "react-native";
import styles from "../../components/Styles";
import {Svg, Line}  from "react-native-svg";


// Will change later const world = {};

const positions = [0,1,2,3,4,5,6,7,8,9,10];

const num_grid = {
    first_pos: 150,
    sec_pos: 300,
    third_pos: 450,
    fourth_pos: 600,
    fifith_pos: 750,
    sixth_pos: 900,
    seventh_pos: 1050,
    eighth_pos: 1300,
    ninth_pos: 1450,
    tength_pos: 1600,
};
let current_position = 120;
let move = 0;
let firstNum = Math.floor(Math.random() * 2) + 1 ;
let secNum = Math.floor(Math.random() * 4) + 1 ;
let answer = firstNum + secNum;


const windowWidth = Dimensions.get("window").width;

const MartianXscape = () => {
    const pan = useRef(new Animated.ValueXY()).current;


    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {

                dx: pan.x   // x,y are Animated.Value

                //dy: pan.y,
            },
        ]),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                // Auto-multiplexed

                // map the value to different numbers on number line platform


                 {toValue: {x: current_position , y:20}} // Back to zero

            ).start();

            /*for (let num_position= 0; num_position < num_grid.entries(num_position) )
                {}

             */


             if(current_position <= 1350) {
                 console.log(panResponder)
                current_position += 150;
                // change color of font when current position is equal
                 // to number_grid position

                 console.log(current_position);
            }
            else{
                current_position = 0;
            }

            switch (current_position) {

                case current_position === num_grid.first_pos:
                    console.log('good');
                    break;


                case current_position <= num_grid.sec_pos:
                    console.log('good');
                    break;


                case current_position <= num_grid.third_pos:
                    console.log('good');

                    break;

                case current_position <= num_grid.fourth_pos:
                    console.log('good');
                    break;

                case current_position <= num_grid.fifith_pos:
                    console.log('good');
                    break;

                case current_position <= num_grid.sixth_pos:
                    console.log('good');
                    break;

                case current_position <= num_grid.seventh_pos:
                    console.log('good');
                    break;

                case current_position <= num_grid.eighth_pos:
                    console.log('good');
                    break;

                case current_position <= num_grid.ninth_pos:
                    console.log('good');
                    break;

                case current_position <= num_grid.tength_pos:
                    console.log('good');
                    break;

                default:
                    console.log(current_position, num_grid.first_pos)

            }



            if (current_position === num_grid.first_pos){

               console.log('worked')
            }



        },
    });

  // console.log( pan.deltaX)

        return (


            <>
                <View style={{flex: 1}}>

                    <ImageBackground

                        style={styles.world}
                        resizeMode={'stretch'}

                        source={require("../../assets/MESCAPE.png")}>

                        <Text>

                            Timer:
                            HP:
                        </Text>

                        <Text style={{fontSize:"50px",alignItems: "center",color:"white"}}>

                            {secNum + '+' + firstNum +'=' }

                            <TextInput style={{fontSize:'50px',color:'white',height:'100%', width:'40%'}} placeholder='?'/>

                        </Text>

                        <TextInput style={{fontSize:'50px', color:'white', height:'100'}} placeholder={current_position}  />


                            <Animated.View  {...panResponder.panHandlers} style={[pan.getLayout(), styles.vary]}>

                                <Image style={styles.vary}
                                       source={require("../../assets/vvi.png")}

                                />

                                <View style={{color:'yellow',width:'100',height:'100'}}>
                                </View>


                            </Animated.View>


                            <View style={{flexDirection:'row',
                                paddingRight: '50px',
                                justifyContent: 'center'
                                }}>
                            {positions.map(positions => (

                                <Text key={current_position.toString()}
                                    style={{
                                    textAlign:'center',
                                    flexDirection:'row',
                                    color:'white',
                                    fontSize:"70px",
                                    borderWidth: '5px',
                                    paddlingLeft: '50px',
                                    width: '200px',
                                    justifyContent:'center'}}>

                                    {positions}


                                </Text>

                                    ))}
                            </View>
                        <Svg height="100" width="100%">
                            <Line x1="0" y1="0" x2="2000" y2="0" stroke="red" strokeWidth="10" />


                        </Svg>



                    </ImageBackground>

                </View>


                </>


        )

};
export default MartianXscape;

