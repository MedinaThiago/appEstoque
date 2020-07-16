import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#e4e4e4',
        alignItems: 'center',
        borderRadius: 24,
        flex: 1,
    },
    searchText: {
        justifyContent: 'center',
        alignSelf: 'center',

        width: '90%',
        padding: 4,
        flex: 1,
    },
    text: {
        fontFamily: 'OpenSans',
        color: '#262626',
    },
    scrollItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    TextInput: {
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#e4e4e4',
        padding: 8,
        margin: 16,
        paddingLeft: 16,
        borderRadius: 24,
        fontSize: 14,
        height: 48,
    },
    button: {
        alignContent: 'flex-end',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 32,
        backgroundColor: '#1C1C1C',
        padding: 8,
        height: 48,
        borderRadius: 30,
    }
});