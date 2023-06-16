import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { offerImage1, offerImage2, offerImage3 } from "../../assets/pngSources";
import { mall1, mall2, mall3, mall4, mall5 } from "../../assets/pngSources";
import { brand1, brand2, brand3, brand4, brand5 } from "../../assets/pngSources";
import { category1, category2, category3, category4, category5 } from "../../assets/pngSources";

const OffersData = [
    {
        id: "1",
        title: "Offer1",
        iconName: offerImage1,
    },
    {
        id: "2",
        title: "Offer2",
        iconName: offerImage2,
    },
    {
        id: "3",
        title: "Offer3",
        iconName: offerImage3,
    },
];

const CategorysData = [
    {
        id: "1",
        title: "Electronics",
        iconName: category1,
    },
    {
        id: "2",
        title: "Clothing",
        iconName: category2,
    },
    {
        id: "3",
        title: "FootWear",
        iconName: category3,
    },
    {
        id: "4",
        title: "Furniture",
        iconName: category4,
    },
    {
        id: "5",
        title: "Sports",
        iconName: category5,
    },
];

const MallsData = [
    {
        id: "1",
        title: "Inorbit Mall",
        iconName: mall1,
    },
    {
        id: "2",
        title: "Nexus Mall",
        iconName: mall2,
    },
    {
        id: "3",
        title: "AMB Mall",
        iconName: mall3,
    },
    {
        id: "4",
        title: "GSM Mall",
        iconName: mall4,
    },
    {
        id: "5",
        title: "City Center Mall",
        iconName: mall5,
    },
];

const BrandsData = [
    {
        id: "1",
        title: "Apple Store",
        iconName: brand1,
    },
    {
        id: "2",
        title: "Starbucks",
        iconName: brand2,
    },
    {
        id: "3",
        title: "KFC",
        iconName: brand3,
    },
    {
        id: "4",
        title: "Nike",
        iconName: brand4,
    },
    {
        id: "5",
        title: "Sports",
        iconName: brand5,
    },
];

const OfferItem = ({ title, iconName }) => {
    return (
        <View style={styles.offerItem}>
            <Image
                style={{ height: 180, width: 320, borderRadius: 10 }}
                source={iconName}
            />
        </View>
    );
};

const CategoryItem = ({ title, iconName }) => {
    return (
        <View style={styles.categoryItem}>
            <View style={{ size: 100, flex: 0.8, alignContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 20, backgroundColor: 'lightgray' }}>
                <Image
                    style={{ height: 50, width: 50 , margin:15}}
                    source={iconName}
                />
            </View>
            <Text style={{ top: 20 }}>{title}</Text>
        </View>
    );
};

const MallItem = ({ title, iconName }) => {
    return (
        <View style={styles.mallItem}>
            <View style={{ backgroundColor: 'white', flex: 1, alignContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 10 }}>
                <Image
                    style={{ height: 180, width: 135, borderRadius: 10 }}
                    source={iconName}
                />
            </View>
            <Text style={{ top: 5, padding: 5, fontWeight: 'bold', }}>{title}</Text>
            <Text style={{ top: 5, padding: 5 }}>{"HitechCity, Hyd"}</Text>
        </View>
    );
};

const BrandItem = ({ title, iconName }) => {
    return (
        <View style={styles.brandItem}>
            <View style={{  size: 100, flex: 0.6, alignContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 10 }}>
                <Image
                    style={{ height: 60, width: 60 }}
                    source={iconName}
                />
            </View>
            <Text style={{ top: 20 }}>{title}</Text>
        </View>
    );
};

const offerRenderItem = ({ item }) => <OfferItem title={item.title} iconName={item.iconName} />;
const categoryRenderItem = ({ item }) => <CategoryItem title={item.title} iconName={item.iconName} />;
const mallRenderItem = ({ item }) => <MallItem title={item.title} iconName={item.iconName} />;
const brandRenderItem = ({ item }) => <BrandItem title={item.title} iconName={item.iconName} />;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            offersData: OffersData,
            categorysData: CategorysData,
            mallsData: MallsData,
            brandsData: BrandsData,
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
                    <SearchBar style={{ margin: 10 }}
                        inputStyle={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 20 }}
                        containerStyle={{ backgroundColor: 'white', }}
                        inputContainerStyle={{ backgroundColor: 'white',  }}
                        placeholder=" Search for malls"
                        lightTheme
                        round
                        value={this.state.searchValue}
                        onChangeText={(text) => this.searchFunction(text)}
                        autoCorrect={false}
                    />

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator='false'
                        data={this.state.offersData}
                        renderItem={offerRenderItem}
                        keyExtractor={(item) => item.id}
                    />

                    <View>
                        <View style={styles.headerViewStyle}>
                            <Text style={{ flex: 0.95, paddingStart: 10, fontWeight: 'bold', }}>Categories</Text>
                            <Ionicons name={'chevron-forward'} color="gray" size={25} />
                        </View>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator='false'
                            data={this.state.categorysData}
                            renderItem={categoryRenderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </View>

                    <View >
                        <View style={styles.headerViewStyle}>
                            <Text style={{ flex: 0.95, paddingStart: 10, fontWeight: 'bold', }}>Malls near to you</Text>
                            <Ionicons name={'chevron-forward'} color="gray" size={25} />
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator = 'false'
                            horizontal
                            data={this.state.mallsData}
                            renderItem={mallRenderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </View>

                    <View>
                        <View style={styles.headerViewStyle}>
                            <Text style={{ flex: 0.95, paddingStart: 10, fontWeight: 'bold', }}>Go with brands</Text>
                            <Ionicons name={'chevron-forward'} color="gray" size={25} />
                        </View>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator='false'
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
        padding: 5,
        backgroundColor:'white'
    },

    headerViewStyle: {
        marginTop: 10,
        padding: 5,
        height: 50,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    offerItem: {
        padding: 10,
        width: 320,
        height: 180,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10
    },

    categoryItem: {
        backgroundColor: 'white',
        width: 100,
        height: 120,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },

    mallItem: {
        backgroundColor: 'white',
        padding: 10,
        width: 150,
        height: 250,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },

    brandItem: {
        backgroundColor: 'white',
        width: 100,
        height: 120,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
});
