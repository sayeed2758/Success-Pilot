import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function DownloadsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>↓</Text>
      <Text style={styles.title}>Offline Library</Text>
      <Text style={styles.text}>Your downloaded lectures and study materials will appear here.</Text>
      <View style={styles.badge}><Text style={styles.badgeText}>Downloads activate in Phase 2+</Text></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: 32 },
  icon: { width: 70, height: 70, borderRadius: 35, backgroundColor: colors.surfaceSoft, color: colors.primaryDark, textAlign: 'center', textAlignVertical: 'center', fontSize: 34, fontWeight: '900' },
  title: { color: colors.text, fontSize: 24, fontWeight: '900', marginTop: 18 },
  text: { textAlign: 'center', color: colors.textMuted, lineHeight: 21, marginTop: 8 },
  badge: { marginTop: 16, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999 },
  badgeText: { color: colors.textMuted, fontSize: 11, fontWeight: '700' },
});
