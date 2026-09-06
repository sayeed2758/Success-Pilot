import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}><Text style={styles.avatarText}>S</Text></View>
      <Text style={styles.title}>Student Profile</Text>
      <Text style={styles.text}>Profile, login and account settings will be connected when authentication is added.</Text>
      <View style={styles.card}><Text style={styles.cardTitle}>Phase 1</Text><Text style={styles.cardText}>UI foundation complete • backend not connected</Text></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', padding: 26, paddingTop: 70 },
  avatar: { width: 76, height: 76, borderRadius: 38, backgroundColor: colors.dark, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.white, fontSize: 28, fontWeight: '900' },
  title: { color: colors.text, fontSize: 24, fontWeight: '900', marginTop: 16 },
  text: { textAlign: 'center', color: colors.textMuted, lineHeight: 21, marginTop: 8 },
  card: { width: '100%', backgroundColor: colors.white, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: 16, marginTop: 24 },
  cardTitle: { color: colors.primary, fontWeight: '900' },
  cardText: { color: colors.textMuted, marginTop: 6, lineHeight: 20 },
});
