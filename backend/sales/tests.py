from django.test import TestCase


class SalesTestCase(TestCase):
    def test_basic(self):
        self.assertEqual(3 * 2, 6)
