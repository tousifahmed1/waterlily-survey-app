import { Question } from './types';

export const SURVEY_QUESTIONS: Question[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    type: 'multipleChoice',
    title:
      'What type of long-term care facility are you currently considering?',
    description:
      'Please select the type of facility that best matches your current needs or preferences.',
    options: [
      {
        id: '550e8400-e29b-41d4-a716-446655440101',
        label: 'Nursing Home',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440102',
        label: 'Assisted Living Facility',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440103',
        label: 'Memory Care Unit',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440104',
        label: 'Independent Living Community',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440105',
        label: 'Adult Family Home',
      },
    ],
    isRequired: true,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    type: 'checkbox',
    title:
      'Which medical services are most important to you in a long-term care facility?',
    description: 'Select all that apply. You may choose multiple options.',
    options: [
      {
        id: '550e8400-e29b-41d4-a716-446655440201',
        label: '24/7 Nursing Care',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440202',
        label: 'Physical Therapy',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440203',
        label: 'Occupational Therapy',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440204',
        label: 'Speech Therapy',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440205',
        label: 'Pain Management',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440206',
        label: 'Wound Care',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440207',
        label: 'Medication Management',
      },
    ],
    isRequired: true,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    type: 'number',
    title: 'What is your monthly budget for long-term care services?',
    description:
      'Please enter the amount in USD that you can afford to spend monthly on long-term care.',
    options: [],
    isRequired: true,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    type: 'paragraph',
    title:
      'Please describe any specific medical conditions or care requirements that are important for us to know.',
    description:
      'This information helps us better understand your healthcare needs and recommend appropriate facilities.',
    options: [],
    isRequired: false,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    type: 'multipleChoice',
    title:
      'How important is the proximity of family and friends when choosing a long-term care facility?',
    description:
      'Select the option that best describes your preference for location.',
    options: [
      {
        id: '550e8400-e29b-41d4-a716-446655440501',
        label: 'Very Important - Must be within 15 minutes',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440502',
        label: 'Important - Within 30 minutes is acceptable',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440503',
        label: 'Somewhat Important - Within 1 hour is fine',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440504',
        label: 'Not Very Important - Distance is not a major factor',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440505',
        label: "Not Important - I'm open to any location",
      },
    ],
    isRequired: true,
  },
];
