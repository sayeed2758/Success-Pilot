import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CourseCard } from '../components/CourseCard';
import { SectionHeader } from '../components/SectionHeader';
import { courses } from '../data/mockData';
import type { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>WELCOME BACK</Text>
          <Text style={styles.title}>Learn. Practice. Grow.</Text>
        </View>
        <View style={styles.avatar}><Text style={styles.avatarText}>S</Text></View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>START LEARNING</Text>
        <Text style={styles.heroTitle}>Your next class is just one tap away.</Text>
        <Text style={styles.heroText}>Explore structured courses, watch lectures and build your preparation step by step.</Text>
        <View style={styles.heroChip}><Text style={styles.heroChipText}>Phase 1 Demo</Text></View>
      </View>

      <SectionHeader title="Featured Courses" right="See all" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 8 }}>
        {courses.filter((course) => course.featured).map((course) => (
          <CourseCard key={course.id} course={course} onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })} large={false} />
        ))}
      </ScrollView>

      <View style={styles.sectionSpace} />
      <SectionHeader title="All Courses" right={`${courses.length} available`} />
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} large onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingTop: 20, paddingBottom: 36 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 },
  eyebrow: { color: colors.primary, fontSize: 10, fontWeight: '900', letterSpacing: 1.4 },
  title: { marginTop: 5, fontSize: 25, fontWeight: '900', color: colors.text },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: colors.dark, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.white, fontSize: 18, fontWeight: '900' },
  hero: { backgroundColor: colors.dark, borderRadius: 24, padding: 22, marginBottom: 24 },
  heroLabel: { color: '#A5B4FC', fontSize: 10, fontWeight: '900', letterSpacing: 1.4 },
  heroTitle: { color: colors.white, fontSize: 24, lineHeight: 30, fontWeight: '900', marginTop: 8, maxWidth: 300 },
  heroText: { color: '#CBD5E1', lineHeight: 20, marginTop: 9, fontSize: 13 },
  heroChip: { alignSelf: 'flex-start', marginTop: 16, borderRadius: 999, backgroundColor: '#1E293B', paddingHorizontal: 12, paddingVertical: 7 },
  heroChipText: { color: '#E2E8F0', fontSize: 11, fontWeight: '800' },
  sectionSpace: { height: 26 },
});
