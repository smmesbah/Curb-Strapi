import type { Schema, Attribute } from '@strapi/strapi';

export interface ExerciseQuestionTypeMcq extends Schema.Component {
  collectionName: 'components_exercise_question_type_mcqs';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Description: Attribute.Text;
    Choice_A: Attribute.String;
    Choice_B: Attribute.String;
    Choice_C: Attribute.String;
    Choice_D: Attribute.String;
    CommentBoxAnswer: Attribute.Text;
    QuestionType: Attribute.Enumeration<
      ['mutiple-choice', 'comment-box', 'fill-in-the-blanks']
    >;
    McqAnswer: Attribute.String;
  };
}

export interface TaskTypesArticle extends Schema.Component {
  collectionName: 'components_task_types_articles';
  info: {
    displayName: 'ArticleTask';
    description: '';
  };
  attributes: {
    articleContent: Attribute.RichText;
  };
}

export interface TaskTypesExerciseTask extends Schema.Component {
  collectionName: 'components_task_types_exercise_tasks';
  info: {
    displayName: 'ExerciseTask';
    description: '';
  };
  attributes: {
    articleContent: Attribute.RichText;
    time: Attribute.Integer;
    Question: Attribute.Component<'exercise-question-type.mcq', true>;
  };
}

export interface TaskTypesVideoTask extends Schema.Component {
  collectionName: 'components_task_types_video_tasks';
  info: {
    displayName: 'VideoTask';
    description: '';
  };
  attributes: {
    articleContent: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'exercise-question-type.mcq': ExerciseQuestionTypeMcq;
      'task-types.article': TaskTypesArticle;
      'task-types.exercise-task': TaskTypesExerciseTask;
      'task-types.video-task': TaskTypesVideoTask;
    }
  }
}
