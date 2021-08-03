// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Feather,
  AntDesign,
  Fontisto,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { Container } from "./scroll.js";
import { Entypo } from "expo-vector-icons";

// import Picache from "picache2";

const Favoritos = () => {
  return (
    <>
      <Text>Favoritos</Text>
    </>
  );
};

const HorizontalViewDuo = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={{ padding: 10, marginTop: 5 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, marginVertical: 5 }}>
          Categorias <Text style={{ fontWeight: "bold" }}>populares.</Text>
        </Text>
        <Text
          style={{
            color: "#3BBBEC",
            fontSize: 18,
            marginVertical: 5,
            textDecorationLine: "underline",
          }}
        >
          Veja tudo
        </Text>
      </View>
      <Container>
        <View>
          <ImageBackground
            imageStyle={{
              borderRadius: 5,
            }}
            style={{
              paddingLeft: 10,
              paddingTop: windowHeight / 4 - 25,
              height: windowHeight / 5,
              width: windowWidth / 3,
              marginRight: 10,
            }}
            source={{ uri: "http://via.placeholder.com/200x200" }}
          ></ImageBackground>
        </View>
        <View>
          <ImageBackground
            imageStyle={{
              borderRadius: 5,
            }}
            style={{
              paddingLeft: 10,
              paddingTop: windowHeight / 4 - 25,
              height: windowHeight / 5,
              width: windowWidth / 3,
              marginRight: 10,
            }}
            source={{ uri: "http://via.placeholder.com/200x200" }}
          ></ImageBackground>
        </View>
        <View>
          <ImageBackground
            imageStyle={{
              borderRadius: 5,
            }}
            style={{
              paddingLeft: 10,
              paddingTop: windowHeight / 4 - 25,
              height: windowHeight / 5,
              width: windowWidth / 3,
              marginRight: 10,
            }}
            source={{ uri: "http://via.placeholder.com/200x200" }}
          ></ImageBackground>
        </View>
      </Container>
    </View>
  );
};

const CategoriasNew = () => {
  const [active, setActive] = React.useState("Casa");

  const lista = ["Casa", "Ofertas do dia", "Cozinha", "Carro", "Pet"];

  const Categoria = (props) => {
    return (
      <>
        <Pressable
          onPress={() => {

            lista.map((i) => {
              props.categoria === i ? setActive(props.categoria) : null
            })

          }}
          style={{
            display: "flex",
            flexDirection: "row",
            borderRadius: 5,
            marginHorizontal: 10,
            width: "auto",
            height: "auto",
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: props.categoria === active ? "#fda540" : "#ddd",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text>{props.categoria}</Text>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <Container style={{ paddingBottom: 20, marginTop: 10 }}>
        <Categoria categoria="Casa" />
        <Categoria categoria="Ofertas do dia" />
        <Categoria categoria="Cozinha" />
        <Categoria categoria="Carro" />
        <Categoria categoria="Pet" />
      </Container>
    </>
  );
};

const Categorias = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const Categoria = (props) => {
    return (
      <ImageBackground
        imageStyle={{
          opacity: 0.5,
          borderRadius: 5,
        }}
        style={{
          paddingLeft: 10,
          paddingTop: 80,
          height: 120,
          width: windowWidth / 3,
          marginRight: 10,
        }}
        source={{ uri: props.image }}
      >
        <Text style={{ fontWeight: "bold", color: "#000" }}>{props.title}</Text>
        <Text style={{ color: "#333" }}>{props.subtitle}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={{ paddingLeft: 10, paddingVertical: 10, marginTop: 5 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, marginVertical: 5 }}>
          Categorias <Text style={{ fontWeight: "bold" }}>populares.</Text>
        </Text>
        <Text
          style={{
            color: "#3BBBEC",
            fontSize: 18,
            marginVertical: 5,
            textDecorationLine: "underline",
          }}
        >
          Veja tudo
        </Text>
      </View>
      <Container>
        <Categoria
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Propriedades"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/3114145/pexels-photo-3114145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Animais"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Veiculos"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Maquinas"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Produtos"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Equipamentos"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Profissionais"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Sementes"
          subtitle="132 anúncios"
        />
        <Categoria
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          icon="heart"
          title="Utensílos"
          subtitle="132 anúncios"
        />
      </Container>
    </View>
  );
};

const VerticalView = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const Item = (props) => {
    return (
      <>
        <View
          style={{
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
            height: "auto",
            width: windowWidth - 20,
            marginRight: 10,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              borderRadius: 5,
              height: 100,
              width: windowWidth / 2,
              marginRight: 10,
            }}
            source={{ uri: props.image }}
          />
          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                fontWeight: "bold",
                width: "60%",
              }}
            >
              iPhone x64GB ram 128 memory
            </Text>
            <Text style={{ color: "#555", fontWeight: "300" }}>
              02 de agosto de 2021
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#777" }}>Anápolis, GO</Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                fontWeight: "bold",
                width: "60%",
              }}
            >
              R$3900
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={{ padding: 10, marginTop: 5 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, marginVertical: 5 }}>
          Recomendados <Text style={{ fontWeight: "bold" }}>para você.</Text>
        </Text>
        <Text
          style={{
            color: "#3BBBEC",
            fontSize: 18,
            marginVertical: 5,
            textDecorationLine: "underline",
          }}
        >
          Veja tudo
        </Text>
      </View>

      <View>
        <Item image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        <Item image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        <Item image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        <Item image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
      </View>
    </View>
  );
};

const HorizontalBalls = () => {
  return (
    <>
      <Container>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#333",
              borderRadius: 5,
              padding: 5,
            }}
          >
            <FontAwesome5
              name="shopping-basket"
              size={50}
              style={{
                margin: 10,
              }}
              color={"#333"}
            />

            <Text style={{ marginLeft: 10 }}>Categoria</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#333",
              borderRadius: 5,
              padding: 5,
            }}
          >
            <FontAwesome5
              name="shopping-basket"
              size={50}
              style={{
                margin: 10,
              }}
              color={"#333"}
            />

            <Text style={{ marginLeft: 10 }}>Categoria</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#333",
              borderRadius: 5,
              padding: 5,
            }}
          >
            <FontAwesome5
              name="shopping-basket"
              size={50}
              style={{
                margin: 10,
              }}
              color={"#333"}
            />

            <Text style={{ marginLeft: 10 }}>Categoria</Text>
          </View>
        </TouchableOpacity>
      </Container>
    </>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },

        style: {
          height: 60,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-basket" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <AntDesign name="hearto" size={24} color={color} />
              {/* {orderActive ? (
                <View
                  style={{
                    marginLeft: 20,
                    width: 15,
                    height: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#f15454",
                    position: "absolute",
                  }}
                >
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      backgroundColor: "#fff",
                      position: "absolute",
                    }}
                  />
                </View>
              ) : null} */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function HomeScreen() {
  const [pesquisa, setPesquisa] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const Header = () => {
    return (
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingTop: 30,
            paddingBottom: 10,
            justifyContent: "space-between",
          }}
        >
          <Feather name="sidebar" size={22} color="black" />
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Amazon</Text>
          <AntDesign name="shoppingcart" size={22} color="black" />
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              marginLeft: "2.5%",
              paddingLeft: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#eee",
              height: 50,
              width: "10%",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <AntDesign name="search1" size={24} color="#aaa" />
          </View>
          <TextInput
            onFocus={() => {
              setPesquisa(true);
            }}
            onBlur={() => {
              setPesquisa(false);
            }}
            placeholder="O que você está procurando?"
            style={{
              marginBottom: 10,
              paddingRight: 10,
              marginRight: "2.5%",
              width: "85%",
              paddingLeft: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              height: 50,
              backgroundColor: "#eee",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          />
        </View>
        {pesquisa ? (
          <View
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "transparent",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                paddingBottom: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Ultimas pesquisas</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                paddingVertical: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FontAwesome5
                name="history"
                style={{ marginRight: 10 }}
                size={16}
                color="#aaa"
              />
              <Text>Instalação de cerca</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                paddingVertical: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FontAwesome5
                name="history"
                style={{ marginRight: 10 }}
                size={16}
                color="#aaa"
              />
              <Text>Instalação de cerca</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                paddingVertical: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FontAwesome5
                name="history"
                style={{ marginRight: 10 }}
                size={16}
                color="#aaa"
              />
              <Text>Instalação de cerca</Text>
            </View>
          </View>
        ) : null}
        <CategoriasNew />
      </View>
    );
  };

  return (
    <>
      <Header />
      <ScrollView
        scrollEnabled={pesquisa ? false : true}
        style={{
          backgroundColor: pesquisa ? "#ddd" : "transparent",
        }}
      >
        <VerticalView />
        <View style={{ height: 30 }} />
      </ScrollView>
    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
