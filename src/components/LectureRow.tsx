import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function LectureRow({ number, title, duration, isFree, onPress }: { number: number; title: string; duration: string; isFree?: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.number}><Text style={styles.numberText}>{number}</Text></View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.duration}>{duration}{isFree ? ' • Free preview' : ''}</Text>
      </View>
      <View style={styles.play}><Text style={styles.playText}>▶</Text></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: colors.border, gap: 12 },
  pressed: { opacity: 0.75 },
  number: { width: 38, height: 38, borderRadius: 12, backgroundColor: colors.surfaceSoft, alignItems: 'center', justifyContent: 'center' },
  numberText: { color: colors.primaryDark, fontWeight: '800' },
  info: { flex: 1 },
  title: { color: colors.text, fontWeight: '700', fontSize: 15, lineHeight: 20 },
  duration: { color: colors.textMuted, fontSize: 12, marginTop: 4, fontWeight: '600' },
  play: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  playText: { color: colors.white, fontSize: 12, marginLeft: 2 },
});
