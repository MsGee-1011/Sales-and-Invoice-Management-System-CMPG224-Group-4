from django.test import TestCase

class InvoicesTestCase(TestCase):
    def test_invoice_math(self):
        self.assertEqual(100 - 50, 50)
