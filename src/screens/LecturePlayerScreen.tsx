import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useVideoPlayer, VideoView } from 'expo-video';
import type { RootStackParamList } from '../navigation/types';
import { courses } from '../data/mockData';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type Props = NativeStackScreenProps<RootStackParamList, 'LecturePlayer'>;

export function LecturePlayerScreen({ route }: Props) {
  const course = courses.find((item) => item.id === route.params.courseId);
  const subject = course?.subjects.find((item) => item.id === route.params.subjectId);
  const lecture = subject?.lectures.find((item) => item.id === route.params.lectureId);
  const player = useVideoPlayer(lecture?.videoUrl ?? '', (instance) => {
    instance.loop = false;
  });

  if (!course || !subject || !lecture) return <View style={styles.center}><Text>Lecture not found.</Text></View>;

  return (
    <View style={styles.container}>
      <View style={styles.playerShell}>
        <VideoView player={player} style={styles.video} nativeControls fullscreenOptions={{ enabled: true }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.kicker}>{course.title} • {subject.title}</Text>
        <Text style={styles.title}>{lecture.title}</Text>
        <Text style={styles.meta}>{lecture.duration}{lecture.isFree ? ' • Free preview' : ''}</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>About this lecture</Text>
          <Text style={styles.infoText}>This Phase 1 player is connected to demo content. In the next phase, lecture metadata and video URLs will come from the backend.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  playerShell: { width: '100%', aspectRatio: 16 / 9, backgroundColor: colors.dark },
  video: { width: '100%', height: '100%' },
  body: { padding: spacing.md },
  kicker: { color: colors.primary, fontSize: 11, fontWeight: '800', lineHeight: 16 },
  title: { color: colors.text, fontSize: 24, lineHeight: 30, fontWeight: '900', marginTop: 6 },
  meta: { color: colors.textMuted, fontSize: 12, fontWeight: '700', marginTop: 7 },
  infoCard: { backgroundColor: colors.white, borderRadius: 16, padding: 16, marginTop: 22, borderWidth: 1, borderColor: colors.border },
  infoTitle: { color: colors.text, fontSize: 15, fontWeight: '900' },
  infoText: { color: colors.textMuted, lineHeight: 20, marginTop: 7, fontSize: 13 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
