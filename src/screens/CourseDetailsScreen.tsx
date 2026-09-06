import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { courses } from '../data/mockData';
import { LectureRow } from '../components/LectureRow';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type Props = NativeStackScreenProps<RootStackParamList, 'CourseDetails'>;

export function CourseDetailsScreen({ route, navigation }: Props) {
  const course = courses.find((item) => item.id === route.params.courseId);

  if (!course) return <View style={styles.center}><Text>Course not found.</Text></View>;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: course.thumbnail }} style={styles.image} />
      <View style={styles.pill}><Text style={styles.pillText}>{course.category}</Text></View>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>

      <View style={styles.stats}>
        <Stat label="Subjects" value={`${course.totalSubjects}`} />
        <Stat label="Lectures" value={`${course.totalLectures}`} />
        <Stat label="Format" value="Video" />
      </View>

      <Text style={styles.sectionTitle}>Course Content</Text>
      {course.subjects.map((subject) => (
        <View key={subject.id} style={styles.subjectCard}>
          <View style={styles.subjectHeader}>
            <Text style={styles.subjectTitle}>{subject.title}</Text>
            <Text style={styles.subjectMeta}>{subject.lectures.length} lectures</Text>
          </View>
          {subject.lectures.map((lecture, index) => (
            <LectureRow
              key={lecture.id}
              number={index + 1}
              title={lecture.title}
              duration={lecture.duration}
              isFree={lecture.isFree}
              onPress={() => navigation.navigate('LecturePlayer', { courseId: course.id, subjectId: subject.id, lectureId: lecture.id })}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <View style={styles.stat}><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: 36 },
  image: { width: '100%', height: 205, borderRadius: 20, backgroundColor: colors.surfaceSoft },
  pill: { alignSelf: 'flex-start', marginTop: 14, backgroundColor: colors.surfaceSoft, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  pillText: { color: colors.primaryDark, fontWeight: '800', fontSize: 11 },
  title: { color: colors.text, fontSize: 28, lineHeight: 34, fontWeight: '900', marginTop: 10 },
  description: { color: colors.textMuted, lineHeight: 21, marginTop: 8 },
  stats: { flexDirection: 'row', marginTop: 20, backgroundColor: colors.white, borderRadius: 18, padding: 16, borderWidth: 1, borderColor: colors.border },
  stat: { flex: 1, alignItems: 'center' },
  statValue: { color: colors.text, fontSize: 18, fontWeight: '900' },
  statLabel: { color: colors.textMuted, fontSize: 11, marginTop: 4, fontWeight: '700' },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: '900', marginTop: 26, marginBottom: 12 },
  subjectCard: { backgroundColor: colors.white, borderRadius: 18, paddingHorizontal: 14, paddingTop: 16, marginBottom: 14, borderWidth: 1, borderColor: colors.border },
  subjectHeader: { marginBottom: 2 },
  subjectTitle: { color: colors.text, fontSize: 16, fontWeight: '900' },
  subjectMeta: { color: colors.textMuted, fontSize: 11, fontWeight: '700', marginTop: 4 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
