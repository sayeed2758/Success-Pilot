import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export function CoursesScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.eyebrow}>LEARNING LIBRARY</Text>
      <Text style={styles.title}>Courses</Text>
      <Text style={styles.subtitle}>Choose a course and start learning at your own pace.</Text>

      <View style={styles.filter}><Text style={styles.filterActive}>All</Text><Text style={styles.filterItem}>Teaching Exams</Text><Text style={styles.filterItem}>Odisha Exams</Text></View>

      {courses.map((course) => (
        <View key={course.id} style={styles.cardWrap}>
          <CourseCard course={course} large onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingTop: 24, paddingBottom: 36 },
  eyebrow: { color: colors.primary, fontSize: 10, letterSpacing: 1.5, fontWeight: '900' },
  title: { fontSize: 30, fontWeight: '900', color: colors.text, marginTop: 6 },
  subtitle: { color: colors.textMuted, lineHeight: 20, marginTop: 7, marginBottom: 18 },
  filter: { flexDirection: 'row', gap: 8, marginBottom: 18, flexWrap: 'wrap' },
  filterActive: { color: colors.white, backgroundColor: colors.primary, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, fontSize: 12, fontWeight: '800' },
  filterItem: { color: colors.textMuted, backgroundColor: colors.white, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, fontSize: 12, fontWeight: '700', borderWidth: 1, borderColor: colors.border },
  cardWrap: { marginBottom: 16 },
});
