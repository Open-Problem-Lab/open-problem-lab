# Dataset Inventory

## Candidate Sources

| Source                                            | Grain                           | Current status                        | Use                                                               |
| ------------------------------------------------- | ------------------------------- | ------------------------------------- | ----------------------------------------------------------------- |
| WHO GSMS reports                                  | Country, product-level          | Usable with participation-bias caveat | Surveillance system structure and known SF product alerts         |
| WHO 2017 global report                            | Regional aggregate              | Usable for framing                    | Global prevalence estimate and methodological distinctions        |
| Lancet 2019 meta-analysis                         | Country, product-class          | Usable as research evidence           | Failure-rate ranges by product class and modeled mortality impact |
| National quality surveillance reports             | Country, sometimes sub-national | Limited — varies by country           | Tested failure rates where available; surveillance-gap indicator  |
| Peer-reviewed field surveys                       | Country, city, product-level    | Usable with sampling-bias caveat      | Product-class failure rates and supply-chain-tier patterns        |
| National medicine regulatory authority registries | Country                         | Limited — varies by country           | Licensed producers, market authorization data, inspection records |

## Required Dataset Properties

For any dataset accepted into canonical analysis:

- Product category (antimalarial, antibiotic, antihypertensive, etc.)
- Active pharmaceutical ingredient and formulation
- Geographic grain (country, region, city, facility)
- Supply-chain tier (manufacturer, importer, distributor, pharmacy, informal market)
- Test method (dissolution, assay, impurity, packaging analysis)
- Sampling frame (random, convenience, targeted-suspicion)
- Date of sampling
- Failure definition (pharmacopoeial standard used)
- Substandard versus falsified classification
- Access conditions and licensing

## Rejection Rule

A dataset is rejected for canonical analysis if the sampling frame, test method, failure definition, or product category cannot be verified. Datasets that conflate substandard and falsified products without disaggregation are rejected for product-level claims but may be retained for aggregate framing.
