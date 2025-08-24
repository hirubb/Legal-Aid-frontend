import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const ForumsScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const forumPosts = [
    {
      id: 1,
      title: 'Property boundary dispute - neighbor built fence 3 feet onto my land, need urgent legal advice on property survey discrepancies',
      author: 'Anonymous User',
      replies: 24,
      views: 156,
      lastActivity: '2 hours ago',
      category: 'Property Law',
      isAnswered: true,
      priority: 'high',
      tags: ['property', 'dispute', 'neighbor'],
    },
    {
      id: 2,
      title: 'Wrongful termination after 5 years - employer claims performance issues but I have evidence of discrimination based on age',
      author: 'Legal Seeker',
      replies: 18,
      views: 89,
      lastActivity: '4 hours ago',
      category: 'Employment Law',
      isAnswered: true,
      priority: 'medium',
      tags: ['employment', 'contract', 'termination'],
    },
    {
      id: 3,
      title: 'Ex-spouse violating custody agreement - taking children out of state without permission, need emergency court intervention',
      author: 'Concerned Parent',
      replies: 31,
      views: 203,
      lastActivity: '6 hours ago',
      category: 'Family Law',
      isAnswered: false,
      priority: 'high',
      tags: ['family', 'custody', 'divorce'],
    },
    {
      id: 4,
      title: 'Contractor damaged my driveway during work - $3,500 in damages, they refuse to pay, how to file small claims court case',
      author: 'First Timer',
      replies: 12,
      views: 67,
      lastActivity: '1 day ago',
      category: 'Civil Law',
      isAnswered: true,
      priority: 'low',
      tags: ['civil', 'claims', 'court'],
    },
    {
      id: 5,
      title: 'Landlord keeping $2,000 security deposit claiming "excessive wear" but apartment was in good condition when I moved out',
      author: 'Tenant Rights',
      replies: 8,
      views: 45,
      lastActivity: '2 days ago',
      category: 'Property Law',
      isAnswered: false,
      priority: 'medium',
      tags: ['tenant', 'deposit', 'landlord'],
    },
  ];

  const categories = [
    { id: 1, name: 'All', count: 93, icon: '📋' },
    { id: 2, name: 'Family Law', count: 28, icon: '👨‍👩‍👧‍👦' },
    { id: 3, name: 'Property Law', count: 19, icon: '🏠' },
    { id: 4, name: 'Employment Law', count: 24, icon: '💼' },
    { id: 5, name: 'Civil Law', count: 15, icon: '⚖️' },
    { id: 6, name: 'Criminal Law', count: 7, icon: '🚔' },
  ];

  const trendingTopics = [
    { name: 'Tenant Rights', count: 45 },
    { name: 'Divorce Process', count: 38 },
    { name: 'Employment Issues', count: 32 },
    { name: 'Property Disputes', count: 29 },
  ];

  const filteredPosts = forumPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Modern Header with Gradient Background */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Legal Community</Text>
            <Text style={styles.headerSubtitle}>Connect • Ask • Learn • Grow</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2.4k</Text>
                <Text style={styles.statLabel}>Active Users</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>156</Text>
                <Text style={styles.statLabel}>Questions Today</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>89%</Text>
                <Text style={styles.statLabel}>Answered</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Enhanced Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search questions, topics, or keywords..."
              placeholderTextColor="#8E8E93"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Text style={styles.clearIcon}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Quick Action Cards */}
        <View style={styles.quickActionsSection}>
          <TouchableOpacity style={styles.askQuestionCard}>
            <View style={styles.askQuestionIcon}>
              <Text style={styles.askQuestionEmoji}>💭</Text>
            </View>
            <View style={styles.askQuestionContent}>
              <Text style={styles.askQuestionTitle}>Ask a Question</Text>
              <Text style={styles.askQuestionSubtitle}>Get expert legal advice anonymously</Text>
            </View>
            <Text style={styles.askQuestionArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.browseCard}>
            <View style={styles.browseIcon}>
              <Text style={styles.browseEmoji}>📚</Text>
            </View>
            <View style={styles.browseContent}>
              <Text style={styles.browseTitle}>Browse Topics</Text>
              <Text style={styles.browseSubtitle}>Explore legal categories</Text>
            </View>
            <Text style={styles.browseArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Categories with Icons */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Legal Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  activeCategory === category.name && styles.activeCategoryCard,
                ]}
                onPress={() => setActiveCategory(category.name)}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[
                  styles.categoryName,
                  activeCategory === category.name && styles.activeCategoryName,
                ]}>{category.name}</Text>
                <Text style={[
                  styles.categoryCount,
                  activeCategory === category.name && styles.activeCategoryCount,
                ]}>{category.count} posts</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Trending Topics */}
        <View style={styles.trendingSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🔥 Trending Topics</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingTopics.map((topic, index) => (
              <TouchableOpacity key={index} style={styles.trendingCard}>
                <Text style={styles.trendingName}>{topic.name}</Text>
                <Text style={styles.trendingCount}>{topic.count} discussions</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Forum Posts with Enhanced Design */}
        <View style={styles.postsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Discussions</Text>
            <View style={styles.filterContainer}>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Latest</Text>
                <Text style={styles.filterArrow}>▼</Text>
              </TouchableOpacity>
            </View>
          </View>

          {filteredPosts.map((post) => (
            <TouchableOpacity key={post.id} style={styles.postCard}>
              {/* Priority Indicator */}
              <View style={styles.postPriorityIndicator}>
                <View style={[
                  styles.priorityDot,
                  post.priority === 'high' && styles.highPriority,
                  post.priority === 'medium' && styles.mediumPriority,
                  post.priority === 'low' && styles.lowPriority,
                ]} />
              </View>

              {/* Post Header */}
              <View style={styles.postHeader}>
                <View style={styles.postTitleRow}>
                  <Text style={styles.postTitle} numberOfLines={2}>{post.title}</Text>
                  {post.isAnswered && (
                    <View style={styles.answeredBadge}>
                      <Text style={styles.answeredIcon}>✓</Text>
                    </View>
                  )}
                </View>
              </View>
              
              {/* Tags */}
              <View style={styles.postTagsContainer}>
                {post.tags.slice(0, 2).map((tag, index) => (
                  <View key={index} style={styles.tagChip}>
                    <Text style={styles.tagText}>#{tag}</Text>
                  </View>
                ))}
              </View>

              {/* Post Meta */}
              <View style={styles.postMeta}>
                <View style={styles.postAuthor}>
                  <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarText}>{post.author.charAt(0)}</Text>
                  </View>
                  <Text style={styles.authorName}>{post.author}</Text>
                </View>
                
                <View style={styles.postStats}>
                  <Text style={styles.statIcon}>💬</Text>
                  <Text style={styles.statText}>{post.replies}</Text>
                  <Text style={styles.statIcon}>👁</Text>
                  <Text style={styles.statText}>{post.views}</Text>
                  <Text style={styles.timeText}>{post.lastActivity}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Enhanced Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>✏️</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  // Header Styles
  header: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 20 : 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  statLabel: {
    fontSize: 12,
    color: '#333333',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'center',
  },
  // Search Section
  searchSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#666666',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  clearIcon: {
    fontSize: 16,
    color: '#999999',
    marginLeft: 10,
  },
  // Quick Actions
  quickActionsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  askQuestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#667eea',
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  askQuestionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  askQuestionEmoji: {
    fontSize: 24,
  },
  askQuestionContent: {
    flex: 1,
  },
  askQuestionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  askQuestionSubtitle: {
    fontSize: 14,
    color: '#333333',
  },
  askQuestionArrow: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
  },
  browseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#764ba2',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#764ba2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  browseIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  browseEmoji: {
    fontSize: 24,
  },
  browseContent: {
    flex: 1,
  },
  browseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  browseSubtitle: {
    fontSize: 14,
    color: '#333333',
  },
  browseArrow: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
  },
  // Categories Section
  categoriesSection: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F8F9FA',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  categoriesContainer: {
    paddingLeft: 20,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 100,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeCategoryCard: {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
  },
  categoryIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 4,
  },
  activeCategoryName: {
    color: '#000000',
  },
  categoryCount: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  activeCategoryCount: {
    color: '#333333',
  },
  // Trending Section
  trendingSection: {
    paddingVertical: 20,
    backgroundColor: '#F8F9FA',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  seeAllText: {
    fontSize: 14,
    color: '#667eea',
    fontWeight: '600',
  },
  trendingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginLeft: 20,
    marginRight: 5,
    minWidth: 140,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  trendingName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  trendingCount: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  // Posts Section
  postsSection: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterText: {
    fontSize: 14,
    color: '#2C3E50',
    fontWeight: '500',
    marginRight: 5,
  },
  filterArrow: {
    fontSize: 10,
    color: '#7F8C8D',
  },
  // Post Cards - Compact Design
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    marginBottom: 8,
  },
  postPriorityIndicator: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  priorityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  highPriority: {
    backgroundColor: '#FF6B6B',
  },
  mediumPriority: {
    backgroundColor: '#FFD93D',
  },
  lowPriority: {
    backgroundColor: '#6BCF7F',
  },
  postContent: {
    flex: 1,
  },
  postTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingRight: 20,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    flex: 1,
    lineHeight: 20,
  },
  answeredBadge: {
    backgroundColor: '#6BCF7F',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  answeredIcon: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  postTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tagChip: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 4,
    marginBottom: 2,
  },
  tagText: {
    fontSize: 10,
    color: '#667eea',
    fontWeight: '500',
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  avatarText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  authorName: {
    fontSize: 12,
    color: '#2C3E50',
    fontWeight: '500',
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 12,
    marginRight: 2,
  },
  statText: {
    fontSize: 10,
    color: '#7F8C8D',
    fontWeight: '500',
    marginRight: 8,
  },
  timeText: {
    fontSize: 10,
    color: '#BDC3C7',
  },
  // FAB
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  fabIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  bottomSpacing: {
    height: 100,
  },
});

export default ForumsScreen;