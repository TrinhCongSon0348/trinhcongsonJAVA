import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const CommentScreen = () => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (text) => {
    setCommentText(text);
  };

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      // Thêm bình luận mới vào danh sách
      setComments([...comments, { id: comments.length + 1, text: commentText }]);
      // Xóa nội dung của TextInput
      setCommentText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bình Luận</Text>
      
      {/* TextInput để nhập nội dung bình luận */}
      <TextInput
        style={styles.input}
        placeholder="Nhập bình luận..."
        value={commentText}
        onChangeText={handleCommentChange}
      />

      {/* Button để gửi bình luận */}
      <Button title="Gửi" onPress={handleAddComment} />

      {/* FlatList để hiển thị danh sách bình luận */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  commentItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
  },
});

export default CommentScreen;
