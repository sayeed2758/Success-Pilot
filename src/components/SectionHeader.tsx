import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function SectionHeader({ title, right }: { title: string; right?: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {right ? <Text style={styles.right}>{right}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 20, fontWeight: '800', color: colors.text },
  right: { fontSize: 13, fontWeight: '700', color: colors.primary },
});
