import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image , ScrollView} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';

const OffersData = [
    {
        id: "1",
        title: "Offer1",
        iconName: "ios-grid",
    },
    {
        id: "2",
        title: "Offer2",
        iconName: "ios-grid",
    },
    {
        id: "3",
        title: "Offer3",
        iconName: "ios-grid",
    },
    {
        id: "4",
        title: "Offer4",
        iconName: "ios-grid",
    },
    {
        id: "5",
        title: "Offer5",
        iconName: "ios-grid",
    },
];

const CategorysData = [
    {
        id: "1",
        title: "Electronics",
        iconName: "ios-grid",
    },
    {
        id: "2",
        title: "Clothing",
        iconName: "ios-grid",
    },
    {
        id: "3",
        title: "FootWear",
        iconName: "ios-grid",
    },
    {
        id: "4",
        title: "Furniture",
        iconName: "ios-grid",
    },
    {
        id: "5",
        title: "Sports",
        iconName: "ios-grid",
    },
];

const MallsData = [
    {
        id: "1",
        title: "Electronics",
        iconName: "home",
    },
    {
        id: "2",
        title: "Clothing",
        iconName: "home",
    },
    {
        id: "3",
        title: "FootWear",
        iconName: "home",
    },
    {
        id: "4",
        title: "Furniture",
        iconName: "home",
    },
    {
        id: "5",
        title: "Sports",
        iconName: "home",
    },
]; 

const BrandsData = [
    {
        id: "1",
        title: "Electronics",
        iconName: "search",
    },
    {
        id: "2",
        title: "Clothing",
        iconName: "search",
    },
    {
        id: "3",
        title: "FootWear",
        iconName: "search",
    },
    {
        id: "4",
        title: "Furniture",
        iconName: "search",
    },
    {
        id: "5",
        title: "Sports",
        iconName: "search",
    },
];

const OfferItem = ({ title }) => {
    return (
        <View style={styles.offerItem}>
            <Text>{title}</Text>
        </View>
    );
};

const CategoryItem = ({ title , iconName}) => {
    return (
        <View style={styles.categoryItem}>
            <Ionicons name={iconName} color="#4F8EF7" size={50} style={{ alignContent:'center' , alignItems:'center'}} />
            <Text style={{top:20}}>{title}</Text>
        </View>
    );
};

const MallItem = ({ title, iconName }) => {
    return (
        <View style={styles.mallItem}>
            <Ionicons name={iconName} color="#4F8EF7" size={50} style={{ alignContent: 'center', alignItems: 'center' }} />
            <Text style={{ top: 20 }}>{title}</Text>
        </View>
    );
};

const BranItem = ({ title, iconName }) => {
    return (
        <View style={styles.branItem}>
            <Ionicons name={iconName} color="#4F8EF7" size={50} style={{ alignContent: 'center', alignItems: 'center' }} />
            <Text style={{ top: 20 }}>{title}</Text>
        </View>
    );
};

const offerRenderItem = ({ item }) => <OfferItem title={item.title} iconName={item.iconName} />;
const categoryRenderItem = ({ item }) => <CategoryItem title={item.title} iconName={item.iconName} />;
const mallRenderItem = ({ item }) => <MallItem title={item.title} iconName={item.iconName} />;
const brandRenderItem = ({ item }) => <BranItem title={item.title} iconName={item.iconName} />;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            offersData: OffersData,
            categorysData: CategorysData,
            mallsData: MallsData,
            brandsData : BrandsData,
            error: null,
            searchValue: "",
        };
        this.arrayholder = OffersData;
    }

    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) => {
            const item_data = `${item.title.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({ data: updatedData, searchValue: text });
    };

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <SearchBar
                    placeholder="Search Here..."
                    lightTheme
                    round
                    value={this.state.searchValue}
                    onChangeText={(text) => this.searchFunction(text)}
                    autoCorrect={false}
                />

                <FlatList
                    horizontal
                    data={this.state.offersData}
                    renderItem={offerRenderItem}
                    keyExtractor={(item) => item.id}
                />

                <View >
                    <View style={styles.headerViewStyle}>
                        <Text>Categories</Text>
                            <Ionicons name={'chevron-forward'} color="#4F8EF7" size={25}  />
                    </View>
                    <FlatList
                        horizontal
                        data={this.state.categorysData}
                        renderItem={categoryRenderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <View >
                    <View style={styles.headerViewStyle}>
                        <Text>Malls near to you</Text>
                            <Ionicons name={'chevron-forward'} color="#4F8EF7" size={25} />
                    </View>
                    <FlatList
                        horizontal
                        data={this.state.mallsData}
                        renderItem={mallRenderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <View >
                    <View style={styles.headerViewStyle}>
                        <Text>Go with brands</Text>
                            <Ionicons name={'chevron-forward'} color="#4F8EF7" size={25} />
                    </View>
                    <FlatList
                        horizontal
                        data={this.state.brandsData}
                        renderItem={brandRenderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
            </ScrollView>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        padding: 2,
    },

    headerViewStyle: {
        marginTop: 5,
        padding: 5,
        height: 50,
        flexDirection:'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightgray'
    },

    offerItem: {
        backgroundColor: 'gray',
        padding: 20,
        width: 320 ,
        height: 180 ,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius :10
    },

    categoryItem: {
        backgroundColor: 'lightgray',
        padding: 10,
        width: 100,
        height: 120,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },

    mallItem: {
        backgroundColor: 'red',
        padding: 10,
        width: 120,
        height: 180,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },

    branItem: {
        backgroundColor: 'lightblue',
        padding: 10,
        width: 100,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
});
