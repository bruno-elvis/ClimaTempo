import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        marginTop: StatusBar.currentHeight,
        flex: 1,

    },

    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        gap: 16,

    },

});
