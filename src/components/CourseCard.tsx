import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import type { Course } from '../data/mockData';

export function CourseCard({ course, onPress, large = false }: { course: Course; onPress: () => void; large?: boolean }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, large && styles.large, pressed && styles.pressed]}>
      <Image source={{ uri: course.thumbnail }} style={[styles.image, large && styles.largeImage]} />
      <View style={styles.body}>
        <View style={styles.categoryPill}><Text style={styles.categoryText}>{course.category}</Text></View>
        <Text style={styles.title} numberOfLines={2}>{course.title}</Text>
        <Text style={styles.meta}>{course.totalSubjects} subjects • {course.totalLectures} lectures</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { width: 260, backgroundColor: colors.surface, borderRadius: 18, overflow: 'hidden', marginRight: 14, borderWidth: 1, borderColor: colors.border },
  large: { width: '100%', marginRight: 0 },
  pressed: { opacity: 0.92, transform: [{ scale: 0.99 }] },
  image: { width: '100%', height: 142, backgroundColor: colors.surfaceSoft },
  largeImage: { height: 190 },
  body: { padding: spacing.md },
  categoryPill: { alignSelf: 'flex-start', backgroundColor: colors.surfaceSoft, paddingHorizontal: 9, paddingVertical: 5, borderRadius: 999, marginBottom: 8 },
  categoryText: { color: colors.primaryDark, fontSize: 11, fontWeight: '800' },
  title: { fontSize: 17, fontWeight: '800', color: colors.text, lineHeight: 22 },
  meta: { marginTop: 7, fontSize: 12, color: colors.textMuted, fontWeight: '600' },
});
